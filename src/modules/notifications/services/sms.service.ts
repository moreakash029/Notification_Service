import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as stompit from 'stompit';
import { CreateSmsNotificationDto } from '../dtos/create-notification.dto';
import { smstemplateDetail } from '../templates/sms_templates';
import { SmsLoggingService } from './sms-logging.service';
import moment from 'moment';

@Injectable()
export class SmsService {
    private readonly logger = new Logger(SmsService.name);
    private readonly queueName: string;
    private readonly connectOptions: any;

    constructor(
        private readonly configService: ConfigService,
        private readonly smsLoggingService: SmsLoggingService,
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


        this.queueName = "sms_queue";
    }

    async sendSms(dto: CreateSmsNotificationDto) {
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

            return new Promise((resolve, reject) => {
                stompit.connect(this.connectOptions, (error: Error | null, client: stompit.Client) => {
                    if (error) {
                        this.logger.error(`Error connecting to Amazon MQ: ${error.message}`, error);
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

                        this.smsLoggingService.logSmsSuccess(logId, {
                            phoneNo: dto.phoneNo,
                            templateName: dto.templateName,
                            attributes: dto.attributes,
                            response: { message: 'Sent to MQ' },
                        });

                        resolve({ message: 'SMS sent successfully' });
                    }, 100);

                    client.on('error', (err: any) => {
                        this.logger.error('STOMP Client Error (SMS)', err);
                        // Error logging to DB removed
                        reject(err);
                    });

                });
            });
        } catch (error) {
            this.logger.error('sendSms crashed', error);
            throw error;
        }
    }
}
