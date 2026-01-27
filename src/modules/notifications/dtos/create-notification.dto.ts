import { IsNotEmpty, IsString, IsObject, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSmsNotificationDto {
    @ApiProperty({ example: '919999999999', description: 'Phone number with country code' })
    @IsString()
    @IsNotEmpty()
    phoneNo: string;

    @ApiProperty({ example: 'ORDER_PLACED', description: 'Template name to use' })
    @IsString()
    @IsNotEmpty()
    templateName: string;

    @ApiProperty({ description: 'Additional dynamic attributes for the template' })
    @IsObject()
    @IsOptional()
    attributes?: Record<string, any>;

    @ApiProperty({ example: true, description: 'Whether to send SMS notification', default: true })
    @IsBoolean()
    @IsOptional()
    sendSms?: boolean;
}

export class CreateEmailNotificationDto {
    @ApiProperty()
    @IsObject()
    @IsNotEmpty()
    details: Record<string, any>;

    @ApiProperty({ example: true, description: 'Whether to send Email notification', default: true })
    @IsBoolean()
    @IsOptional()
    sendEmail?: boolean;
}

export class CreateWhatsappNotificationDto {
    @ApiProperty()
    @IsObject()
    @IsNotEmpty()
    template_attributes: Record<string, any>;

    @ApiProperty({ example: true, description: 'Whether to send Whatsapp notification', default: true })
    @IsBoolean()
    @IsOptional()
    sendWhatsapp?: boolean;
}

export class CreateUnifiedNotificationDto {
    @ApiProperty({ description: 'Send SMS notification', default: false })
    @IsBoolean()
    @IsOptional()
    sms?: boolean;

    @ApiProperty({ description: 'Send Email notification', default: false })
    @IsBoolean()
    @IsOptional()
    email?: boolean;

    @ApiProperty({ description: 'Send Whatsapp notification', default: false })
    @IsBoolean()
    @IsOptional()
    whatsapp?: boolean;

    @ApiProperty({ description: 'SMS Notification details', required: false })
    @IsOptional()
    @IsObject()
    smsDetails?: CreateSmsNotificationDto;

    @ApiProperty({ description: 'Email Notification details', required: false })
    @IsOptional()
    @IsObject()
    emailDetails?: CreateEmailNotificationDto;

    @ApiProperty({ description: 'Whatsapp Notification details', required: false })
    @IsOptional()
    @IsObject()
    whatsappDetails?: CreateWhatsappNotificationDto;
}
