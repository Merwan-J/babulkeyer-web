import { Controller, Post, Get, Param, Delete } from '@nestjs/common';
import { Body, UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';

import { MessageDto } from 'src/messages/dtos/message.dto';

import { MessageService } from 'src/messages/services/message/message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  @Post()
  @UsePipes(ValidationPipe)
  addMessage(@Body() messageDto: MessageDto) {
    return this.messageService.addMessage(messageDto);
  }

  @Get(':id')
  getMessage(@Param('id') id: string) {
    try {
      return this.messageService.getMessage(id);
    } catch {
      return null;
    }
  }
  @Get('all')
  getAllMessages() {
    return this.messageService.getAllMessages();
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: string) {
    return this.messageService.deleteMessage(id);
  }
}
