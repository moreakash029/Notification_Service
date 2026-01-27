import { Controller, Post, Body, HttpCode, HttpStatus, Logger, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SmsLoggingService } from '../services/sms-logging.service';
import { EmailLoggingService } from '../services/email-logging.service';
import { WhatsappLoggingService } from '../services/whatsapp-logging.service';

@ApiTags('Notifications Webhooks')
@Controller('notifications/callback')
export class WebhookController {
    private readonly logger = new Logger(WebhookController.name);

    constructor(
        private readonly smsLoggingService: SmsLoggingService,
        private readonly emailLoggingService: EmailLoggingService,
        private readonly whatsappLoggingService: WhatsappLoggingService,
    ) { }

    @Post('email')
    @ApiOperation({ summary: 'Email Webhook Callback' })
    @HttpCode(HttpStatus.OK)
    async emailCallback(@Body() body: any) {
        // Sparkpost format usually: [ { msys: { message_event: { ... } } } ]
        // or inside a wrapper.
        // We will adapt based on what 'emailupdatestatus.mjs' expects.
        // "let emailwebhookresponse = requestBody.emailrequestbody[0];"
        // "let data = emailwebhookresponse.msys.message_event;"

        try {
            // Need to handle if body is wrapped or direct array.
            // Assuming the body comes as the raw JSON payload.
            // If the provider wraps it differently we might need adjustment.
            // Based on legacy, it seems to expect: { emailrequestbody: [ ... ] } or similar when processing SQS record.
            // But from direct HTTP webhook, likely it's the direct payload.

            // Standard Sparkpost webhook payload is an array of objects.
            let events = body;
            if (body.emailrequestbody) {
                events = body.emailrequestbody; // adapting if legacy wrapper used
            } else if (!Array.isArray(body) && body.msys) {
                events = [body];
            }

            if (!Array.isArray(events)) {
                this.logger.warn(`Received non-array email callback: ${JSON.stringify(body)}`);
                return;
            }

            for (const event of events) {
                const messageEvent = event.msys?.message_event;
                if (messageEvent && messageEvent.transmission_id) {
                    await this.emailLoggingService.updateStatus(messageEvent.transmission_id, messageEvent.type);
                }
            }

            return { message: 'Processed' };
        } catch (error) {
            this.logger.error(`Error processing email callback`, error);
            throw error;
        }
    }

    @Post('sms')
    @ApiOperation({ summary: 'SMS Webhook Callback' })
    @HttpCode(HttpStatus.OK)
    async smsCallback(@Body() body: any) {
        // Legacy 'smsupdatestatus.mjs':
        // const sid = requestBody.requestparam.sid;
        // update with requestBody.requestparam

        try {
            // Assuming body structure matches 'requestparam' wrapper often used or direct.
            const requestParam = body.requestparam || body;
            const sid = requestParam.sid;

            if (sid) {
                await this.smsLoggingService.updateStatus(sid, requestParam);
            } else {
                this.logger.warn(`Missing 'sid' in SMS callback: ${JSON.stringify(body)}`);
            }

            return { message: 'Processed' };

        } catch (error) {
            this.logger.error(`Error processing SMS callback`, error);
            throw error;
        }
    }

    @Post('whatsapp')
    @ApiOperation({ summary: 'Whatsapp Webhook Callback' })
    @HttpCode(HttpStatus.OK)
    async whatsappCallback(@Body() body: any) {
        // Legacy 'gupshupupdatestatus.mjs':
        // const gupshup_data = requestBody.gupshup_data; -> Array
        // data.externalId, data.errorCode

        try {
            let gupshupData = body.gupshup_data || body;

            if (!Array.isArray(gupshupData)) {
                // sometimes single object?
                if (gupshupData.externalId) {
                    gupshupData = [gupshupData];
                } else {
                    this.logger.warn(`Expected array or object with externalId in whatsapp callback: ${JSON.stringify(body)}`);
                    return;
                }
            }

            for (const data of gupshupData) {
                if (data.externalId) {
                    await this.whatsappLoggingService.updateStatus(data.externalId, data);
                }
            }

            return { message: 'Processed' };

        } catch (error) {
            this.logger.error(`Error processing Whatsapp callback`, error);
            throw error;
        }
    }
}
