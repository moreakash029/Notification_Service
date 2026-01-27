import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as stompit from 'stompit';
import { CreateWhatsappNotificationDto } from '../dtos/create-notification.dto';
import { templateDetail } from '../templates/whatsapp_templates';
import { WhatsappLoggingService } from './whatsapp-logging.service';
import moment from 'moment-timezone';

@Injectable()
export class WhatsappService {
    private readonly logger = new Logger(WhatsappService.name);
    private readonly queueName: string;
    private readonly connectOptions: any;

    constructor(
        private readonly configService: ConfigService,
        private readonly whatsappLoggingService: WhatsappLoggingService,
    ) {
        const host = this.configService.get<string>('AMAZON_MQ_HOST');
        const port = Number(this.configService.get('AMAZON_MQ_PORT')) || 61614;
        const username = this.configService.get<string>('AMAZON_MQ_USERNAME');
        const password = this.configService.get<string>('AMAZON_MQ_PASSWORD');

        if (!host || !username || !password) {
            throw new Error('Amazon MQ config missing');
        }

        this.connectOptions = {
            host,
            port,
            ssl: true,
            connectHeaders: {
                host: '/',
                login: username,
                passcode: password,
                'heart-beat': '5000,5000',
            },
        };

        this.queueName = "whatsapp_queue";
    }

    async sendWhatsapp(dto: CreateWhatsappNotificationDto) {
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
                throw new Error("Request template not present in service"); // Matches logic in sms.service.ts
            }

            this.logger.log(`Generated template info for ${template_attributes.templateName || 'unknown'}`);

            return new Promise((resolve, reject) => {
                stompit.connect(this.connectOptions, (error: Error | null, client: stompit.Client) => {
                    if (error) {
                        this.logger.error(`Error connecting to Amazon MQ: ${error.message}`, error);
                        // Error logging removed
                        reject(error);
                        return;
                    }

                    const frame = client.send({
                        'destination': `/queue/${this.queueName}`,
                        'content-type': 'application/json'
                    });

                    // Flatten structure if needed, but sms service sends { template_attributes }
                    frame.write(JSON.stringify({ template_attributes }));
                    frame.end();

                    setTimeout(() => {
                        client.disconnect();
                        this.logger.log('Message sent to Amazon MQ');

                        this.whatsappLoggingService.logWhatsappSuccess(
                            logId,
                            { message: 'Sent to MQ' },
                            template_attributes
                        );

                        resolve({ message: 'Message sent successfully' });
                    }, 100);

                    client.on('error', (err: any) => {
                        this.logger.error('STOMP Client Error (Whatsapp)', err);
                        // Error logging removed
                        reject(err);
                    });
                });
            });

        } catch (error) {
            this.logger.error(`Error sending Whatsapp`, error);
            throw error;
        }
    }
}
