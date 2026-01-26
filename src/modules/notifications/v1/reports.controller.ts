import { Controller, Post, Get, Body, Query, Res, InternalServerErrorException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SmsLoggingService } from '../services/sms-logging.service';
import { EmailLoggingService } from '../services/email-logging.service';
import { WhatsappLoggingService } from '../services/whatsapp-logging.service';
import { Response } from 'express';

@ApiTags('Reports')
@Controller('notifications/reports')
export class ReportsController {
    constructor(
        private readonly smsLoggingService: SmsLoggingService,
        private readonly emailLoggingService: EmailLoggingService,
        private readonly whatsappLoggingService: WhatsappLoggingService,
    ) { }

    @Post('sms')
    @ApiOperation({ summary: 'Get SMS Stats' })
    async getSmsStats(@Body('date') date: string) {
        return this.smsLoggingService.getSmsStats(date);
    }

    @Post('email')
    @ApiOperation({ summary: 'Get Email Stats' })
    async getEmailStats(@Body('date') date: string) {
        return this.emailLoggingService.getEmailStats(date);
    }

    @Post('whatsapp')
    @ApiOperation({ summary: 'Get Whatsapp Stats' })
    async getWhatsappStats(@Body('date') date: string) {
        return this.whatsappLoggingService.getWhatsappStats(date);
    }

    // Export functionality matching the legacy 'export_data.mjs'
    // Legacy accepted: using query params: start_date, end_date, table_name
    // Here we will map 'table_name' to our Collections.
    @Get('export')
    @ApiOperation({ summary: 'Export Notification Logs' })
    async exportData(
        @Query('start_date') startDate: string,
        @Query('end_date') endDate: string,
        @Query('type') type: string, // sms, email, whatsapp
        @Res() res: Response
    ) {
        try {
            // Basic validation
            if (!startDate || !endDate || !type) {
                return res.status(400).json({ message: 'Missing required parameters: start_date, end_date, type' });
            }

            // Note: The actual data retrieval logic for export is slightly different because it needs a range query.
            // For now, I will implement a basic version here, but ideally this should be moved to the services if logic allows.
            // However, since Mongoose models are injected in services, I might need to add 'getLogsByDateRange' to services.
            // For this iteration, let's just return a placeholder or call a new service method if strictly required. 
            // But since I am in the controller, I should delegate.

            // I'll assume for now we want to just dump the stats or raw logs?
            // The legacy code dumped raw items from DynamoDB.
            // So I should add 'getLogsByRange' to the services.

            let data = [];
            if (type === 'sms') {
                // We need new methods in services for range queries. 
                // Proceeding with just stats endpoints first as per plan, but 'export' was part of the plan too.
                // I will add the methods to services in next steps if needed, or inline the logic if I can access models (I can't here directly).
                // So I will pause here and add 'getLogsByRange' to services, then come back to this controller or update it.

                // Let's stub it for now and handle the logic in services.
                data = await this.smsLoggingService.getSmsLogsByRange(startDate, endDate);
            } else if (type === 'email') {
                data = await this.emailLoggingService.getEmailLogsByRange(startDate, endDate);
            } else if (type === 'whatsapp') {
                data = await this.whatsappLoggingService.getWhatsappLogsByRange(startDate, endDate);
            } else {
                return res.status(400).json({ message: 'Invalid type. Use sms, email, or whatsapp' });
            }

            res.header('Content-Type', 'application/json');
            res.header('Content-Disposition', `attachment; filename="export-${type}-${startDate}-${endDate}.json"`);
            return res.json({ data });

        } catch (error) {
            console.error('Export failed:', error);
            throw new InternalServerErrorException(error.message);
        }
    }
}
