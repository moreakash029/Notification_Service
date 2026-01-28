import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as amqp from 'amqplib';
import { CreateWhatsappNotificationDto } from '../dtos/create-notification.dto';
import { templateDetail } from '../templates/whatsapp_templates';
import { WhatsappLoggingService } from './whatsapp-logging.service';
import moment from 'moment-timezone';

@Injectable()
export class WhatsappService {
    private readonly logger = new Logger(WhatsappService.name);
    private readonly queueName: string;
    private readonly rabbitMQUrl: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly whatsappLoggingService: WhatsappLoggingService,
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

        this.queueName = "whatsapp_queue";
    }

    async sendWhatsapp(dto: CreateWhatsappNotificationDto) {
        let connection;
        let channel;

        try {
            if (dto.sendWhatsapp === false) {
                this.logger.log(`Whatsapp sending is disabled`);
                return { message: "Whatsapp sending is disabled" };
            }

            this.logger.log(`Processing Whatsapp notification`);

            const template_attributes: Record<string, any> = {
                ...(dto.template_attributes || dto),
                created_at: moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss")
            };

            const logId = await this.whatsappLoggingService.logWhatsappRequest(template_attributes) || "";

            const templateInfo = templateDetail(template_attributes);

            if (!templateInfo) {
                throw new Error("Request template not present in service");
            }

            this.logger.log(`Generated template info for ${template_attributes.templateName || 'unknown'}`);

            // Connect to RabbitMQ
            connection = await amqp.connect(this.rabbitMQUrl);
            channel = await connection.createChannel();

            // Assert queue exists (create if not)
            await channel.assertQueue(this.queueName, { durable: true });

            // Send message to queue
            const messageBuffer = Buffer.from(JSON.stringify({ template_attributes }));
            channel.sendToQueue(this.queueName, messageBuffer, { persistent: true });

            this.logger.log('Message sent to RabbitMQ');

            await this.whatsappLoggingService.logWhatsappSuccess(
                logId,
                { message: 'Sent to MQ' },
                template_attributes
            );

            return { message: 'Message sent successfully' };

        } catch (error) {
            this.logger.error(`Error sending Whatsapp`, error);
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
