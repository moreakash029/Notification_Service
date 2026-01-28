import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as amqp from 'amqplib';
import { CreateEmailNotificationDto } from '../dtos/create-notification.dto';
import { emailtemplateDetail } from '../templates/email_templates';
import { EmailLoggingService } from './email-logging.service';
import { format } from "date-fns-tz";

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private readonly queueName: string;
    private readonly rabbitMQUrl: string;
    private readonly timeZone: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly emailLoggingService: EmailLoggingService,
    ) {
        const host = this.configService.get<string>('AMAZON_MQ_HOST');
        const port = Number(this.configService.get('AMAZON_MQ_PORT')) || 5672;
        const username = this.configService.get<string>('AMAZON_MQ_USERNAME');
        const password = this.configService.get<string>('AMAZON_MQ_PASSWORD');
        const vhost = this.configService.get<string>('RABBITMQ_VHOST') || '/';

        if (!host || !username || !password) {
            throw new Error('Amazon MQ config missing');
        }

        const protocol = port === 5671 ? 'amqps' : 'amqp';
        this.rabbitMQUrl = `${protocol}://${username}:${password}@${host}:${port}${vhost}`;

        this.queueName = "email_queue";
        this.timeZone = "Asia/Kolkata";
    }

    async sendEmail(dto: CreateEmailNotificationDto) {
        let connection;
        let channel;

        try {
            if (dto.sendEmail === false) {
                this.logger.log(`Email sending is disabled`);
                return { message: "Email sending is disabled" };
            }

            this.logger.log(`Processing Email notification`);

            const template_attributes: Record<string, any> = dto.details || dto.template_attributes || dto;

            if (!template_attributes.created_at) {
                const now = new Date();
                template_attributes.created_at = format(now, "yyyy-MM-dd HH:mm:ss", {
                    timeZone: this.timeZone,
                });
            }

            const logId = await this.emailLoggingService.logEmailRequest(template_attributes) || "";

            const templateInfo = await emailtemplateDetail(template_attributes);

            if (!templateInfo) {
                throw new Error("Request template not present in service");
            }

            connection = await amqp.connect(this.rabbitMQUrl);
            channel = await connection.createChannel();

            await channel.assertQueue(this.queueName, { durable: true });

            const messageBuffer = Buffer.from(JSON.stringify({ template_attributes }));
            channel.sendToQueue(this.queueName, messageBuffer, { persistent: true });

            this.logger.log('Message sent to RabbitMQ');

            await this.emailLoggingService.logEmailSuccess(logId, {
                template_attributes,
                response: { message: 'Sent to MQ' },
            });

            return { message: 'Email sent successfully' };

        } catch (error) {
            this.logger.error(`Error sending Email`, error);
            throw error;
        } finally {
            try {
                if (channel) await channel.close();
                if (connection) await connection.close();
            } catch (closeError) {
                this.logger.error('Error closing RabbitMQ connection', closeError);
            }
        }
    }
}
