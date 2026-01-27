import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '@thesleepcompany/db-wrapper';

@Schema({ timestamps: true, collection: 'notification-whatsapp-hit-logs-dev' })
export class WhatsappLog extends BaseSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: false })
  phone: string;

  @Prop({ required: false })
  whatsappId: string;

  @Prop({ required: false })
  templateName: string;

  @Prop({ type: Object, required: false })
  templateAttributes: Record<string, any>;

  @Prop({ required: false })
  status: string;

  @Prop({ required: false })
  whatsappstatus: string;

  @Prop({ type: Object, required: false })
  response: Record<string, any>;

  @Prop({ required: false })
  error: string;

  @Prop({ required: false })
  details: string;

  @Prop({ required: false })
  successStatus: string;

  @Prop({ required: false })
  sentStatus: string;

  @Prop({ required: false })
  readStatus: string;

  @Prop({ required: false })
  otherStatus: string;

  @Prop({ required: false })
  unknownSubscriberStatus: string;

  @Prop({ required: false })
  deferredStatus: string;

  @Prop({ required: false })
  blockedForUserStatus: string;

  @Prop({ required: false })
  twentyFourHourExceededStatus: string;

  @Prop({ required: false })
  errorcode: string;

  @Prop({ required: false })
  createdDate: string;

  @Prop({ required: false })
  timeanddate: string;

  @Prop({ type: Date, default: () => new Date(Date.now() + 5.5 * 60 * 60 * 1000) })
  createdAt: Date;

  @Prop({ type: Object, required: false })
  requestBody: Record<string, any>;

  @Prop({ type: [Object], required: false })
  callbackHistory: Record<string, any>[];
}

export const WhatsappLogSchema = SchemaFactory.createForClass(WhatsappLog);
