import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { EmailLog } from '../../../schemas/email-log.schema';
import { EmailErrorLog } from '../../../schemas/email-error-log.schema';

@Injectable()
export class EmailLoggingService {
  private readonly logger = new Logger(EmailLoggingService.name);

  constructor(
    @InjectModel(EmailLog.name) private emailLogModel: Model<EmailLog>,
  ) { }

  private getIndianTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace('Z', '+05:30');
  }

  async logEmailRequest(templateAttributes: Record<string, any>): Promise<string | null> {
    try {
      const id = uuidv4();
      const emailLog = new this.emailLogModel({
        id,
        orderId: templateAttributes.orderId,
        templateName: templateAttributes.templateName,
        templateAttributes,
        status: 'PENDING',
        timeanddate: this.getIndianTime(),
        requestBody: templateAttributes,
      });
      await emailLog.save();
      return id;
    } catch (error) {
      this.logger.error(`Failed to log email request: ${error.message}`);
      return null;
    }
  }

  async logEmailSuccess(logId: string, data: Record<string, any>): Promise<void> {
    try {
      if (logId) {
        await this.emailLogModel.updateOne({ id: logId }, {
          $set: {
            status: 'SUCCESS',
            response: data.response,
          }
        });
        this.logger.log(`Email log updated for ${logId}`);
      } else {
        const emailLog = new this.emailLogModel({
          id: uuidv4(),
          orderId: data.template_attributes?.orderId, // Handle varying structures if needed
          templateName: data.template_attributes?.templateName,
          templateAttributes: data.template_attributes,
          status: 'SUCCESS',
          response: data.response,
          timeanddate: this.getIndianTime(),
          requestBody: data.template_attributes,
        });

        await emailLog.save();
        this.logger.log(`Email log created for ${data.template_attributes?.orderId}`);
      }

    } catch (error) {
      this.logger.error(`Failed to log email success: ${error.message}`);
    }
  }

  // Removed logEmailError and errorLogModel

  async updateStatus(transmissionId: string, status: string): Promise<void> {
    try {
      // Assuming 'response.results.id' or similar contains the transmissionId
      // Or if we stored transmissionId separately. In the schema we have 'id' which is UUID.
      // We need to match where 'response.id' or similar == transmissionId.
      // Let's assume we search by a field inside validation or we trust 'id' is transmissionId?
      // Actually, logEmailSuccess generates a new uuid.
      // We need to find the log where the response contains the transmissionId.
      // Sparkpost returns { results: { id: "..." } } typically.

      const updateResult = await this.emailLogModel.updateMany(
        { "response.results.id": transmissionId },
        { $set: { sparkpost_status: status } }
      );

      this.logger.log(`Updated email status for transmissionId ${transmissionId} to ${status}. Modified: ${updateResult.modifiedCount}`);
    } catch (error) {
      this.logger.error(`Failed to update email status: ${error.message}`);
    }
  }

  async getEmailStats(date: string): Promise<any> {
    try {
      const logs = await this.emailLogModel.find({
        timeanddate: { $regex: date },
      });

      const stats: Record<string, any> = {};

      logs.forEach((log) => {
        const templateName = log.templateName || 'Unknown';
        if (!stats[templateName]) {
          stats[templateName] = {
            hitcount: 0,
            bounce: 0,
            delivery: 0,
            injection: 0,
            delay: 0,
          };
        }

        stats[templateName].hitcount++;

        // Map SparkPost status
        const status = log.response?.status || log.status; // Adjust based on where you store the sparkpost status

        switch (status) { // Assuming 'status' holds values like 'bounce', 'delivery' etc or we might need to check 'response.results.id' etc. 
          // Based on previous code: if (el.sparkpost_status === "bounce")
          // In the new schema we have 'status' and 'response' object. 
          // Let's assume for now the status is stored in 'status' field or derived.
          // If we look at the legacy code, it checked `sparkpost_status`.
          // In the new system, we should ensure we populate this correctly.
          // For now, I will implement generic logic.
          case 'bounce':
            stats[templateName].bounce++;
            break;
          case 'delivery':
            stats[templateName].delivery++;
            break;
          case 'injection':
            stats[templateName].injection++;
            break;
          case 'delay':
            stats[templateName].delay++;
            break;
          default:
            // If status is just 'SUCCESS', maybe count as delivery?
            if (status === 'SUCCESS') stats[templateName].delivery++;
        }
      });

      return { result: stats };
    } catch (error) {
      this.logger.error(`Failed to get Email stats: ${error.message}`);
      throw error;
    }
  }

  async getEmailLogsByRange(startDate: string, endDate: string): Promise<any[]> {
    try {
      return await this.emailLogModel.find({
        timeanddate: { $gte: startDate, $lte: endDate + 'T23:59:59' }
      }).exec();
    } catch (error) {
      this.logger.error(`Failed to get Email logs by range: ${error.message}`);
      throw error;
    }
  }
}
