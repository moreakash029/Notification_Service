import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SmsService } from '../services/sms.service';
import { EmailService } from '../services/email.service';
import { WhatsappService } from '../services/whatsapp.service';
import { CreateSmsNotificationDto, CreateEmailNotificationDto, CreateWhatsappNotificationDto, CreateUnifiedNotificationDto } from '../dtos/create-notification.dto';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController {
    constructor(
        private readonly smsService: SmsService,
        private readonly emailService: EmailService,
        private readonly whatsappService: WhatsappService,
    ) { }

    @Post('send')
    @ApiOperation({ summary: 'Send Unified Notification' })
    @ApiResponse({ status: 200, description: 'Notifications processed successfully' })
    @HttpCode(HttpStatus.OK)
    async sendNotification(@Body() dto: CreateUnifiedNotificationDto) {
        const results: any = {};

        if (dto.sms && dto.smsDetails) {
            if (dto.smsDetails.sendSms === undefined) dto.smsDetails.sendSms = true;
            try {
                results.sms = await this.smsService.sendSms(dto.smsDetails);
            } catch (error) {
                results.sms = { error: error.message };
            }
        }

        if (dto.email && dto.emailDetails) {
            if (dto.emailDetails.sendEmail === undefined) dto.emailDetails.sendEmail = true;
            try {
                results.email = await this.emailService.sendEmail(dto.emailDetails);
            } catch (error) {
                results.email = { error: error.message };
            }
        }

        if (dto.whatsapp && dto.whatsappDetails) {
            if (dto.whatsappDetails.sendWhatsapp === undefined) dto.whatsappDetails.sendWhatsapp = true;
            try {
                results.whatsapp = await this.whatsappService.sendWhatsapp(dto.whatsappDetails);
            } catch (error) {
                results.whatsapp = { error: error.message };
            }
        }

        return results;
    }

    @Post('sms')
    @ApiOperation({ summary: 'Send SMS Notification' })
    @ApiResponse({ status: 200, description: 'SMS sent successfully' })
    @HttpCode(HttpStatus.OK)
    async sendSms(@Body() body: any) {
        if (body.template_attributes) {
            body.phoneNo = body.template_attributes.phoneNo;
            body.templateName = body.template_attributes.templateName;
            body.attributes = body.template_attributes;
        }
        return this.smsService.sendSms(body);
    }

    @Post('email')
    @ApiOperation({ summary: 'Send Email Notification' })
    @ApiResponse({ status: 200, description: 'Email sent successfully' })
    @HttpCode(HttpStatus.OK)
    async sendEmail(@Body() dto: CreateEmailNotificationDto) {
        return this.emailService.sendEmail(dto);
    }

    @Post('whatsapp')
    @ApiOperation({ summary: 'Send Whatsapp Notification' })
    @ApiResponse({ status: 200, description: 'Whatsapp message sent successfully' })
    @HttpCode(HttpStatus.OK)
    async sendWhatsapp(@Body() dto: CreateWhatsappNotificationDto) {
        return this.whatsappService.sendWhatsapp(dto);
    }
}
