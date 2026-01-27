import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '@thesleepcompany/db-wrapper';

@Schema({ timestamps: true, collection: 'notification-email-hit-logs-dev' })
export class EmailLog extends BaseSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: false })
  email: string;

  @Prop({ required: false })
  templateName: string;

  @Prop({ type: Object, required: false })
  templateAttributes: Record<string, any>;

  @Prop({ required: false })
  status: string;

  @Prop({ required: false })
  sparkpost_status: string;

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

export const EmailLogSchema = SchemaFactory.createForClass(EmailLog);
