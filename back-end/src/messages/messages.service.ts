import { Injectable } from '@nestjs/common';
import { MessageDots } from './Dots/message.dots';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  constructor(private messagesRepository: MessagesRepository) {}

  createMessage(messageDots: MessageDots) {
    return this.messagesRepository.createMessage(messageDots);
  }

  renderAllMessages() {
    return this.messagesRepository.renderAllMessages();
  }
}
