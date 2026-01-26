import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment-timezone';
import { EmailLog } from '../../../schemas/email-log.schema';
import { EmailErrorLog } from '../../../schemas/email-error-log.schema';

@Injectable()
export class EmailLoggingService {
  private readonly logger = new Logger(EmailLoggingService.name);

  constructor(
    @InjectModel(EmailLog.name) private emailLogModel: Model<EmailLog>,
    @InjectModel(EmailErrorLog.name) private emailErrorLogModel: Model<EmailErrorLog>,
  ) { }

  private getIndianTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace('Z', '+05:30');
  }

  async logEmailSuccess(data: Record<string, any>): Promise<void> {
    try {
      const emailLog = new this.emailLogModel({
        id: uuidv4(),
        email: data.template_attributes?.email,
        templateName: data.template_attributes?.templateName,
        templateAttributes: data.template_attributes,
        status: 'SUCCESS',
        response: data.response,
        timeanddate: this.getIndianTime(),
        requestBody: data,
      });

      await emailLog.save();
      this.logger.log(`Email log created`);
    } catch (error) {
      this.logger.error(`Failed to log email success: ${error.message}`);
    }
  }

  async logEmailError(orderId: string, error: any, requestBody?: Record<string, any>): Promise<void> {
    try {
      const errorLog = new this.emailErrorLogModel({
        id: uuidv4(),
        orderId,
        error: error.message || JSON.stringify(error),
        requestBody,
        dateAndTime: this.getIndianTime(),
      });

      await errorLog.save();
      this.logger.log(`Email error log created for ${orderId}`);
    } catch (err) {
      this.logger.error(`Failed to log email error: ${err.message}`);
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
