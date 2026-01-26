import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationsController } from './v1/notifications.controller';
import { SmsService } from './services/sms.service';
import { EmailService } from './services/email.service';
import { WhatsappService } from './services/whatsapp.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [ConfigModule, HttpModule],
    controllers: [NotificationsController],
    providers: [SmsService, EmailService, WhatsappService],
})
export class NotificationsModule { }
