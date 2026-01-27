import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { SmsLog } from '../../../schemas/sms-log.schema';
import { SmsErrorLog } from '../../../schemas/sms-error-log.schema';

@Injectable()
export class SmsLoggingService {
  private readonly logger = new Logger(SmsLoggingService.name);

  constructor(
    @InjectModel(SmsLog.name) private smsLogModel: Model<SmsLog>,
  ) { }

  private getIndianTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace('Z', '+05:30');
  }

  async logSmsRequest(phoneNo: string, templateName: string, attributes: Record<string, any>): Promise<string | null> {
    try {
      const id = uuidv4();
      const smsLog = new this.smsLogModel({
        id,
        phoneNo,
        templateName,
        templateAttributes: attributes,
        status: 'PENDING',
        timeanddate: this.getIndianTime(),
        requestBody: { phoneNo, templateName, attributes },
      });
      await smsLog.save();
      return id;
    } catch (error) {
      this.logger.error(`Failed to log SMS request: ${error.message}`);
      return null;
    }
  }

  async logSmsSuccess(logId: string, data: Record<string, any>): Promise<void> {
    try {
      if (logId) {
        await this.smsLogModel.updateOne({ id: logId }, {
          $set: {
            status: 'SUCCESS',
            response: data.response,
          }
        });
        this.logger.log(`SMS log updated for ${logId}`);
      } else {
        // Fallback
        const smsLog = new this.smsLogModel({
          id: uuidv4(),
          phoneNo: data.phoneNo,
          templateName: data.templateName,
          templateAttributes: data.attributes,
          status: 'SUCCESS',
          response: data.response,
          timeanddate: this.getIndianTime(),
          requestBody: data,
        });
        await smsLog.save();
      }
    } catch (error) {
      this.logger.error(`Failed to log SMS success: ${error.message}`);
    }
  }

  // Removed logSmsError

  async updateStatus(sid: string, response: any): Promise<void> {
    try {
      const updateResult = await this.smsLogModel.updateMany(
        { $or: [{ "response.MessageId": sid }, { "response.response.MessageId": sid }] },
        { $set: { sms_service_response: response } }
      );

      this.logger.log(`Updated SMS status for SID ${sid}. Modified: ${updateResult.modifiedCount}`);
    } catch (error) {
      this.logger.error(`Failed to update SMS status: ${error.message}`);
    }
  }

  async getSmsStats(date: string): Promise<any> {
    try {
      const logs = await this.smsLogModel.find({
        timeanddate: { $regex: date },
      });

      const stats: Record<string, any> = {};

      logs.forEach((log) => {
        const templateName = log.templateName || 'Unknown';
        if (!stats[templateName]) {
          stats[templateName] = {
            hitcount: 0,
            success: 0,
            fail: 0,
          };
        }

        stats[templateName].hitcount++;

        // Check SMS service response for success or failure
        // Assuming response structure similar to what was in DynamoDB logic or adapting to new structure
        if (log.response && log.response.reason === 'DELIVRD') { // Adjust based on actual provider response
          stats[templateName].success++;
        } else if (log.status === 'SUCCESS') {
          // Fallback if specific provider field isn't there but status is generic SUCCESS
          stats[templateName].success++;
        } else {
          stats[templateName].fail++;
        }
      });

      return { result: stats };
    } catch (error) {
      this.logger.error(`Failed to get SMS stats: ${error.message}`);
      throw error;
    }
  }

  async getSmsLogsByRange(startDate: string, endDate: string): Promise<any[]> {
    try {
      // Assuming timeanddate is ISO string or close to it.
      // If it's a custom format, we might need regex or string comparison.
      // The current getIndianTime() returns ISO-like string with offset.
      // String comparison works for ISO datetimes.

      // However, if the query param is just YYYY-MM-DD, we need to handle that.
      // Let's assume startDate and endDate are YYYY-MM-DD.

      return await this.smsLogModel.find({
        timeanddate: { $gte: startDate, $lte: endDate + 'T23:59:59' }
      }).exec();
    } catch (error) {
      this.logger.error(`Failed to get SMS logs by range: ${error.message}`);
      throw error;
    }
  }
}
