import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { CreateWhatsappNotificationDto } from '../dtos/create-notification.dto';
import { templateDetail } from '../templates/whatsapp_templates';
import { WhatsappLoggingService } from './whatsapp-logging.service';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class WhatsappService {
    private readonly logger = new Logger(WhatsappService.name);

    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService,
        private readonly whatsappLoggingService: WhatsappLoggingService,
    ) { }

    async sendWhatsapp(dto: CreateWhatsappNotificationDto) {
        if (dto.sendWhatsapp === false) {
            this.logger.log(`Whatsapp sending is disabled`);
            return { message: "Whatsapp sending is disabled" };
        }

        this.logger.log(`Processing Whatsapp notification`);

        const { template_attributes } = dto;
        const templateInfo = templateDetail(template_attributes);

        this.logger.log(`Generated template info for ${template_attributes.templateName || 'unknown'}`);

        try {
            const response = await this.sendToProvider(templateInfo);
            this.logger.log("Whatsapp sent successfully", response);

            await this.whatsappLoggingService.logWhatsappSuccess(response, template_attributes);

            return { message: "Message sent successfully", providerResponse: response };
        } catch (error) {
            this.logger.error(`Error sending Whatsapp`, error);

            // Log error to MongoDB
            await this.whatsappLoggingService.logWhatsappError(
                template_attributes?.phoneNo || 'unknown',
                error,
                template_attributes
            );

            throw error;
        }
    }

    private async sendToProvider(config: any) {
        try {
            // config from templateDetail contains url, method, headers, etc.
            // axios.post(config.url, null, config) was the original logic.
            // config object in templates looks like: { method: 'post', url: '...', headers: {} }
            // This implies the query params are in the URL.

            const response = await lastValueFrom(
                this.httpService.request({
                    method: config.method,
                    url: config.url,
                    headers: config.headers,
                    data: null
                })
            );

            return response.data;
        } catch (error) {
            this.logger.error(`Provider request failed: ${error.message}`);
            throw new Error(`Failed to send whatsapp: ${error.message}`);
        }
    }
}
