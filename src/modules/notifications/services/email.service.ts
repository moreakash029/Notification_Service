import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as stompit from 'stompit';
import { CreateEmailNotificationDto } from '../dtos/create-notification.dto';
import { emailtemplateDetail } from '../templates/email_templates';
import { EmailLoggingService } from './email-logging.service';
import { format } from "date-fns-tz";

@Injectable()
export class EmailService {
    private readonly logger = new Logger(EmailService.name);
    private readonly queueName: string;
    private readonly connectOptions: any;
    private readonly timeZone: string;

    constructor(
        private readonly configService: ConfigService,
        private readonly emailLoggingService: EmailLoggingService,
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

        this.queueName = "email_queue";
        this.timeZone = "Asia/Kolkata";
    }

    async sendEmail(dto: CreateEmailNotificationDto) {
        if (dto.sendEmail === false) {
            this.logger.log(`Email sending is disabled`);
            return { message: "Email sending is disabled" };
        }

        this.logger.log(`Processing Email notification`);

        const template_attributes = dto.details || dto;

        if (!template_attributes.created_at) {
            const now = new Date();
            template_attributes.created_at = format(now, "yyyy-MM-dd HH:mm:ss", {
                timeZone: this.timeZone,
            });
        }


        // Log entry
        const logId = await this.emailLoggingService.logEmailRequest(template_attributes) || "";

        const templateInfo = await emailtemplateDetail(template_attributes);

        if (!templateInfo) {
            throw new Error("Request template not present in service");
        }

        return new Promise((resolve, reject) => {
            stompit.connect(this.connectOptions, (error: Error | null, client: stompit.Client) => {
                if (error) {
                    this.logger.error(`Error connecting to Amazon MQ for Email: ${error.message}`, error);
                    // Error logging removed
                    reject(error);
                    return;
                }

                const frame = client.send({
                    'destination': `/queue/${this.queueName}`,
                    'content-type': 'application/json'
                });

                frame.write(JSON.stringify({ template_attributes }));
                frame.end();

                setTimeout(() => {
                    client.disconnect();
                    this.logger.log('Message sent to Amazon MQ');

                    this.emailLoggingService.logEmailSuccess(logId, {
                        template_attributes,
                        response: { message: 'Sent to MQ' },
                    });

                    resolve({ message: 'Email sent successfully' });
                }, 100);

                client.on('error', (err: any) => {
                    this.logger.error('STOMP Client Error (Email)', err);
                    // Error logging removed
                    reject(err);
                });

            });
        });
    }
}
