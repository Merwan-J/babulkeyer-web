import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDots } from './Dots/message.dots';
import { messageDocument } from './schema/message.schema';

@Injectable()
export class MessagesRepository {
  constructor(
    @InjectModel('message') private messageModel: Model<messageDocument>,
  ) {}

  async createMessage(messageDots: MessageDots): Promise<messageDocument> {
    const newMessage = new this.messageModel(messageDots);
    console.log(messageDots);
    return await newMessage.save();
  }

  async renderAllMessages() {
    return this.messageModel.find({});
  }
}
