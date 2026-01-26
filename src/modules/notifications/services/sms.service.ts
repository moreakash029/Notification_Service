import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { CreateSmsNotificationDto } from '../dtos/create-notification.dto';
import { smstemplateDetail } from '../templates/sms_templates';
import moment from 'moment-timezone';

@Injectable()
export class SmsService {
    private readonly logger = new Logger(SmsService.name);
    private readonly sqsClient: SQSClient;
    private readonly queueUrl: string;

    constructor(private readonly configService: ConfigService) {
        const accessKeyId = this.configService.get<string>('AWS_ACCESS_KEY_ID');
        const secretAccessKey = this.configService.get<string>('AWS_SECRET_ACCESS_KEY');

        if (!accessKeyId || !secretAccessKey) {
            throw new Error('AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY is missing in configuration');
        }

        this.sqsClient = new SQSClient({
            region: this.configService.get<string>('AWS_REGION', 'ap-south-1'),
            credentials: {
                accessKeyId,
                secretAccessKey,
            }
        });
        this.queueUrl = this.configService.get<string>('SQS_URL_SMS') || "https://sqs.ap-south-1.amazonaws.com/440586161847/sms-createorder-dev";
    }

    async sendSms(dto: CreateSmsNotificationDto) {
        if (dto.sendSms === false) {
            this.logger.log(`SMS sending is disabled for ${dto.phoneNo}`);
            return { message: "SMS sending is disabled" };
        }

        this.logger.log(`Processing SMS for ${dto.phoneNo} with template ${dto.templateName}`);

        const template_attributes: Record<string, any> = {
            ...dto.attributes,
            phoneNo: dto.phoneNo,
            templateName: dto.templateName,
            created_at: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
        };

        for (const key in template_attributes) {
            if (typeof template_attributes[key] === "string") {
                template_attributes[key] = template_attributes[key].trim();
            }
        }

        const templateInfo = smstemplateDetail(template_attributes);

        if (!templateInfo) {
            throw new Error("Request template not present in service");
        }

        const params = {
            QueueUrl: this.queueUrl,
            MessageBody: JSON.stringify({ template_attributes }),
            DelaySeconds: 5,
        };

        try {
            this.logger.log(`Sending message to SQS: ${this.queueUrl}`);
            await this.sqsClient.send(new SendMessageCommand(params));
            this.logger.log("Message sent to SQS");

            return { message: "SMS sent successfully" };
        } catch (error) {
            this.logger.error(`Error sending SMS`, error);
            throw error;
        }
    }
}
