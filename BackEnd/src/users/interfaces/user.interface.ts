import { Document } from 'mongoose';

export interface IUser extends Document {
  userName: string;
  name: string;
  password: string;
  adminType: string;
  status: boolean;
  createdAt: Date;
}
