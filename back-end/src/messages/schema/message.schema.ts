import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type messageDocument = Message & Document;
@Schema()
export class Message {
  @Prop()
  clientName: string;

  @Prop()
  clientEmail: string;

  @Prop()
  clientAddress: string;

  @Prop()
  clientSubject: string;

  @Prop()
  clientStatement: string;
}

export const messageSchema = SchemaFactory.createForClass(Message);
