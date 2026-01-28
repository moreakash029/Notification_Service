import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as amqp from 'amqplib';
import { CreateSmsNotificationDto } from '../dtos/create-notification.dto';
import { smstemplateDetail } from '../templates/sms_templates';
import { SmsLoggingService } from './sms-logging.service';
import moment from 'moment';

@Injectable()
export class SmsService {
    private readonly logger = new Logger(SmsService.name);
    private readonly queueName: string;
    private readonly rabbitMQUrl: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly smsLoggingService: SmsLoggingService,
    ) {
        const host = this.configService.get<string>('AMAZON_MQ_HOST');
        const port = Number(this.configService.get('AMAZON_MQ_PORT')) || 5672;
        const username = this.configService.get<string>('AMAZON_MQ_USERNAME');
        const password = this.configService.get<string>('AMAZON_MQ_PASSWORD');
        const vhost = this.configService.get<string>('RABBITMQ_VHOST') || '/';

        if (!host || !username || !password) {
            throw new Error('Amazon MQ config missing');
        }

        // Construct RabbitMQ connection URL
        const protocol = port === 5671 ? 'amqps' : 'amqp';
        this.rabbitMQUrl = `${protocol}://${username}:${password}@${host}:${port}${vhost}`;

        this.queueName = "sms_queue";
    }

    async sendSms(dto: CreateSmsNotificationDto) {
        let connection;
        let channel;

        try {
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

            // Log entry
            const logId = await this.smsLoggingService.logSmsRequest(dto.phoneNo, dto.templateName, template_attributes) || "";

            const templateInfo = smstemplateDetail(template_attributes);

            if (!templateInfo) {
                throw new Error("Request template not present in service");
            }

            // Connect to RabbitMQ
            connection = await amqp.connect(this.rabbitMQUrl);
            channel = await connection.createChannel();

            // Assert queue exists (create if not)
            await channel.assertQueue(this.queueName, { durable: true });

            // Send message to queue
            const messageBuffer = Buffer.from(JSON.stringify({ template_attributes }));
            channel.sendToQueue(this.queueName, messageBuffer, { persistent: true });

            this.logger.log('Message sent to RabbitMQ');

            await this.smsLoggingService.logSmsSuccess(logId, {
                phoneNo: dto.phoneNo,
                templateName: dto.templateName,
                attributes: dto.attributes,
                response: { message: 'Sent to MQ' },
            });

            return { message: 'SMS sent successfully' };

        } catch (error) {
            this.logger.error('sendSms crashed', error);
            throw error;
        } finally {
            // Clean up connections
            try {
                if (channel) await channel.close();
                if (connection) await connection.close();
            } catch (closeError) {
                this.logger.error('Error closing RabbitMQ connection', closeError);
            }
        }
    }
}
