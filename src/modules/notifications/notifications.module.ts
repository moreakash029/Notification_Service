import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationsController } from './v1/notifications.controller';
import { ReportsController } from './v1/reports.controller';
import { SmsService } from './services/sms.service';
import { EmailService } from './services/email.service';
import { WhatsappService } from './services/whatsapp.service';
import { SmsLoggingService } from './services/sms-logging.service';
import { EmailLoggingService } from './services/email-logging.service';
import { WhatsappLoggingService } from './services/whatsapp-logging.service';
import { HttpModule } from '@nestjs/axios';
import { SmsLog, SmsLogSchema } from '../../schemas/sms-log.schema';
import { EmailLog, EmailLogSchema } from '../../schemas/email-log.schema';
import { WhatsappLog, WhatsappLogSchema } from '../../schemas/whatsapp-log.schema';
import { SmsErrorLog, SmsErrorLogSchema } from '../../schemas/sms-error-log.schema';
import { EmailErrorLog, EmailErrorLogSchema } from '../../schemas/email-error-log.schema';
import { WhatsappErrorLog, WhatsappErrorLogSchema } from '../../schemas/whatsapp-error-log.schema';

@Module({
    imports: [
        ConfigModule,
        HttpModule,
        MongooseModule.forFeature([
            { name: SmsLog.name, schema: SmsLogSchema },
            { name: EmailLog.name, schema: EmailLogSchema },
            { name: WhatsappLog.name, schema: WhatsappLogSchema },
            { name: SmsErrorLog.name, schema: SmsErrorLogSchema },
            { name: EmailErrorLog.name, schema: EmailErrorLogSchema },
            { name: WhatsappErrorLog.name, schema: WhatsappErrorLogSchema },
        ]),
    ],
    controllers: [NotificationsController, ReportsController],
    providers: [
        SmsService,
        EmailService,
        WhatsappService,
        SmsLoggingService,
        EmailLoggingService,
        WhatsappLoggingService,
    ],
})
export class NotificationsModule { }
