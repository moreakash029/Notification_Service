import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '@thesleepcompany/db-wrapper';

@Schema({ timestamps: true })
export class SmsLog extends BaseSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  phoneNo: string;

  @Prop({ required: false })
  templateName: string;

  @Prop({ type: Object, required: false })
  templateAttributes: Record<string, any>;

  @Prop({ required: false })
  status: string;

  @Prop({ type: Object, required: false })
  sms_service_response: Record<string, any>;

  @Prop({ type: Object, required: false })
  response: Record<string, any>;

  @Prop({ required: false })
  error: string;

  @Prop({ required: false })
  timeanddate: string;

  @Prop({ type: Date, default: () => new Date(Date.now() + 5.5 * 60 * 60 * 1000) })
  createdAt: Date;

  @Prop({ type: Object, required: false })
  requestBody: Record<string, any>;
}

export const SmsLogSchema = SchemaFactory.createForClass(SmsLog);
