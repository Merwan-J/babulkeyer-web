import { Controller, Get, Post, Body } from '@nestjs/common';
import { MessageDots } from './Dots/message.dots';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messageService: MessagesService) {}

  @Get()
  renderAllMessages() {
    return this.messageService.renderAllMessages();
  }

  @Post()
  ceateMessages(@Body() messageDots: MessageDots) {
    return this.messageService.createMessage(messageDots);
  }
}
