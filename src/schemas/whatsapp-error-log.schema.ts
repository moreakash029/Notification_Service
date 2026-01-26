import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '@thesleepcompany/db-wrapper';
import { Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class WhatsappErrorLog extends BaseSchema {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  error: string;

  @Prop({ type: MongooseSchema.Types.Mixed, required: false })
  requestBody: Record<string, any>;

  @Prop({ required: false })
  dateAndTime: string;

  @Prop({ type: Date, default: () => new Date(Date.now() + 5.5 * 60 * 60 * 1000) })
  createdAt: Date;
}

export const WhatsappErrorLogSchema = SchemaFactory.createForClass(WhatsappErrorLog);
