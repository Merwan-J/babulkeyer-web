import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Message } from 'src/messages/schemas/messages.schema';
import { IMessage } from 'src/messages/Interfaces/message.interface';
import { MessageDto } from 'src/messages/dtos/message.dto';
import { HttpStatus } from '@nestjs/common/enums';
import { NotFoundException } from '@nestjs/common/exceptions';
@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message.name) private messageModel: Model<IMessage>,
  ) {}
  async findMessageById(id: string): Promise<IMessage> {
    let message;
    try {
      message = await this.messageModel.findById(id);
    } catch (e) {
      throw new NotFoundException('Message Not Found');
    }
    if (message) {
      return message;
    }
  }
  async addMessage(message: MessageDto): Promise<IMessage> {
    const newMessage = new this.messageModel(message);
    let newMess;
    try {
      newMess = await newMessage.save();
    } catch (err) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
    if (newMess) {
      return newMess;
    }
  }
  async getMessage(id: string): Promise<IMessage> {
    const message = await this.messageModel.findById(id);
    if (!message) {
      throw new NotFoundException('Message Not Found');
    }
    return message;
  }
  async deleteMessage(id: string) {
    try {
      await this.messageModel.deleteOne({ id });
    } catch (e) {
      throw new NotFoundException('Message Not Found');
    }
  }
  async getAllMessages() {
    const messages = await this.messageModel.find();
    if (!messages || messages.length === 0) {
      throw new NotFoundException('No Message Found');
    }
  }
}
