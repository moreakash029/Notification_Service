import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SQSClient, SendMessageCommand } from '@aws-sdk/client-sqs';
import { CreateEmailNotificationDto } from '../dtos/create-notification.dto';
import moment from 'moment-timezone';

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
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

    async sendEmail(dto: CreateEmailNotificationDto) {
        if (dto.sendEmail === false) {
            this.logger.log(`Email sending is disabled`);
            return { message: "Email sending is disabled" };
        }

        this.logger.log(`Processing Email notification`);

        const { template_attributes } = dto;

        if (!template_attributes.created_at) {
            template_attributes.created_at = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
        }

        const params = {
            QueueUrl: this.queueUrl,
            MessageBody: JSON.stringify({ template_attributes }),
            DelaySeconds: 0,
        };

        try {
            await this.sqsClient.send(new SendMessageCommand(params));
            this.logger.log("Email task sent to SQS");
            return { message: "Email sent successfully" };
        } catch (error) {
            this.logger.error(`Error sending email SQS`, error);
            throw error;
        }
    }
}
