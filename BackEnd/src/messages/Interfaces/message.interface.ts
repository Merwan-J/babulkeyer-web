import { Document } from 'mongoose';

export interface IMessage extends Document {
  name: string;
  email: string;
  address: string;
  subject: string;
  statement: string;
}
