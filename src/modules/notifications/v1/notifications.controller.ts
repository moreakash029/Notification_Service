import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SmsService } from '../services/sms.service';
import { EmailService } from '../services/email.service';
import { WhatsappService } from '../services/whatsapp.service';
import { CreateSmsNotificationDto, CreateEmailNotificationDto, CreateWhatsappNotificationDto } from '../dtos/create-notification.dto';

@ApiTags('Notifications')
@Controller('v1/notifications')
export class NotificationsController {
    constructor(
        private readonly smsService: SmsService,
        private readonly emailService: EmailService,
        private readonly whatsappService: WhatsappService,
    ) { }

    @Post('sms')
    @ApiOperation({ summary: 'Send SMS Notification' })
    @ApiResponse({ status: 200, description: 'SMS sent successfully' })
    @HttpCode(HttpStatus.OK)
    async sendSms(@Body() dto: CreateSmsNotificationDto) {
        return this.smsService.sendSms(dto);
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
