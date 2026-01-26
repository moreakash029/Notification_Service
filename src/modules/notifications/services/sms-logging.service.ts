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
    @InjectModel(SmsErrorLog.name) private smsErrorLogModel: Model<SmsErrorLog>,
  ) { }

  private getIndianTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace('Z', '+05:30');
  }

  async logSmsSuccess(data: Record<string, any>): Promise<void> {
    try {
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
      this.logger.log(`SMS log created for ${data.phoneNo}`);
    } catch (error) {
      this.logger.error(`Failed to log SMS success: ${error.message}`);
    }
  }

  async logSmsError(phoneNo: string, orderId: string, error: any, requestBody?: Record<string, any>): Promise<void> {
    try {
      const errorLog = new this.smsErrorLogModel({
        id: uuidv4(),
        orderId,
        error: error.message || JSON.stringify(error),
        requestBody,
        dateAndTime: this.getIndianTime(),
      });

      await errorLog.save();
      this.logger.log(`SMS error log created for ${orderId}`);
    } catch (err) {
      this.logger.error(`Failed to log SMS error: ${err.message}`);
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
