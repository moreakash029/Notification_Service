import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns-tz';
import moment from 'moment-timezone';
import { WhatsappLog } from '../../../schemas/whatsapp-log.schema';
import { WhatsappErrorLog } from '../../../schemas/whatsapp-error-log.schema';

@Injectable()
export class WhatsappLoggingService {
  private readonly logger = new Logger(WhatsappLoggingService.name);

  constructor(
    @InjectModel(WhatsappLog.name) private whatsappLogModel: Model<WhatsappLog>,
  ) { }

  private getIndianTime(): string {
    return new Date(Date.now() + 5.5 * 60 * 60 * 1000)
      .toISOString()
      .replace('Z', '+05:30');
  }

  private getFormattedDate(): string {
    const timeZone = 'Asia/Kolkata';
    const now = new Date();
    return format(now, 'yyyy-MM-dd', { timeZone });
  }

  async logWhatsappRequest(templateAttributes: Record<string, any>): Promise<string | null> {
    try {
      const id = uuidv4();
      const cleanedAttributes = { ...templateAttributes };
      delete cleanedAttributes['phoneNo']; // Often redundant if phone is separate, but keeping parity

      const whatsappLog = new this.whatsappLogModel({
        id,
        phone: templateAttributes.phoneNo,
        templateName: templateAttributes.templateName,
        templateAttributes: cleanedAttributes,
        status: 'PENDING',
        createdDate: this.getFormattedDate(),
        timeanddate: this.getIndianTime(),
        requestBody: templateAttributes,
      });

      await whatsappLog.save();
      return id;
    } catch (error) {
      this.logger.error(`Failed to log whatsapp request: ${error.message}`);
      return null;
    }
  }

  async logWhatsappSuccess(
    logId: string,
    whatsappResponse: any,
    templateAttributes: Record<string, any>,
  ): Promise<void> {
    try {
      // If we have a logId, update. If not (legacy or error in req log), maybe create new?
      // Plan was to link. If logId is null, we can create new or skip.
      // Let's support creation if logId is missing for robustness, or just update if exists.

      const { phone, details, id: whatsappId, status: whatsappstatus } = whatsappResponse.response || whatsappResponse;

      const gupshupAttribute = {
        successStatus: 'No',
        sentStatus: 'No',
        readStatus: 'No',
        otherStatus: 'No',
        unknownSubscriberStatus: 'No',
        deferredStatus: 'No',
        blockedForUserStatus: 'No',
        twentyFourHourExceededStatus: 'No',
        errorcode: '',
      };

      const updateData: any = {
        phone, // Ensure phone is set
        details,
        whatsappId,
        whatsappstatus,
        status: 'SUCCESS',
        response: whatsappResponse,
        ...gupshupAttribute,
      };

      if (logId) {
        await this.whatsappLogModel.updateOne({ id: logId }, { $set: updateData });
        this.logger.log(`Whatsapp log updated for ${logId}`);
      } else {
        // Fallback: create new if no ID passed (should not happen with new flow)
        await this.whatsappLogModel.create({
          id: uuidv4(),
          templateName: templateAttributes.templateName,
          templateAttributes,
          createdDate: this.getFormattedDate(),
          timeanddate: this.getIndianTime(),
          requestBody: templateAttributes,
          ...updateData
        });
      }
    } catch (error) {
      this.logger.error(`Failed to log whatsapp success: ${error.message}`);
    }
  }

  async updateStatus(externalId: string, data: any): Promise<void> {
    try {
      // data contains full callback payload
      const statusType = data.type || data.errorCode; // Gupshup callback has 'type' usually for status like 'read', 'enqueued' etc. or 'errorCode' in error events.
      // Legacy: 'data.errorCode' was passed as second arg. Now 'data' is full object.
      // Let's assume 'data.errorCode' functionality is preserving legacy mapping.

      let fieldName = "";
      const errorCode = data.errorCode || data.type; // Adapt

      switch (errorCode) {
        case "000": fieldName = "successStatus"; break;
        case "025": fieldName = "sentStatus"; break; // sent
        case "026": fieldName = "readStatus"; break; // read
        case "020": fieldName = "otherStatus"; break;
        case "003": fieldName = "unknownSubscriberStatus"; break;
        case "010": fieldName = "deferredStatus"; break;
        case "022": fieldName = "blockedForUserStatus"; break;
        case "101": fieldName = "twentyFourHourExceededStatus"; break;
        // extended mappings for 'sent', 'delivered', 'read' strings if they appear in type
        case "sent": fieldName = "sentStatus"; break;
        case "read": fieldName = "readStatus"; break;
        case "delivered": fieldName = "successStatus"; break;
        default:
          // Just log payload
          break;
      }

      const updateOps: any = {
        $push: { callbackHistory: data }
      };

      if (fieldName) {
        updateOps.$set = { [fieldName]: "Yes" };
      }

      const updateResult = await this.whatsappLogModel.updateMany(
        { whatsappId: externalId },
        updateOps
      );

      this.logger.log(`Updated Whatsapp status for ID ${externalId}. Modified: ${updateResult.modifiedCount}`);

    } catch (error) {
      this.logger.error(`Failed to update Whatsapp status: ${error.message}`);
    }
  }

  async getWhatsappStats(date: string): Promise<any> {
    try {
      const logs = await this.whatsappLogModel.find({
        timeanddate: { $regex: date },
      });

      const stats: Record<string, any> = {};

      logs.forEach((log) => {
        const templateName = log.templateName || 'Unknown';
        if (!stats[templateName]) {
          stats[templateName] = {
            hitcount: 0,
            success: 0,
            sent: 0,
            read: 0,
            other: 0,
            unknown_subscriber: 0,
            deferred: 0,
            blocked_for_user: 0,
            hour_exceeded: 0,
          };
        }

        stats[templateName].hitcount++;

        // Mappings based on legacy 'whatsapp_ragebase_report.mjs' or similar
        // Adjusting accessors based on new schema

        // This logic assumes we will store these specific statuses in the log.
        // For now, mapping from the simple 'status' or 'response' object
        // The legacy code had fields like 'success_status', 'read_status' etc. derived probably from callbacks.

        if (log.status === 'SUCCESS') stats[templateName].success++;
        // We might need to refine this if we want exact parity with "read", "sent" etc. from callbacks.
        // Assuming current implementation mainly logs 'SUCCESS' on dispatch. 
        // If we have callback handling, we'd check that. 

        // Placeholder for detailed status checks if available in 'response' or 'status'
        if (log.response) {
          if (log.response.status === 'read') stats[templateName].read++;
          if (log.response.status === 'sent') stats[templateName].sent++;
        }
      });

      return { result: stats };
    } catch (error) {
      this.logger.error(`Failed to get Whatsapp stats: ${error.message}`);
      throw error;
    }
  }

  async getWhatsappLogsByRange(startDate: string, endDate: string): Promise<any[]> {
    try {
      return await this.whatsappLogModel.find({
        timeanddate: { $gte: startDate, $lte: endDate + 'T23:59:59' }
      }).exec();
    } catch (error) {
      this.logger.error(`Failed to get Whatsapp logs by range: ${error.message}`);
      throw error;
    }
  }
}
