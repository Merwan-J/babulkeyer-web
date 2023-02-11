import { MessageDots } from './Dots/message.dots';
import { MessagesRepository } from './messages.repository';
export declare class MessagesService {
    private messagesRepository;
    constructor(messagesRepository: MessagesRepository);
    createMessage(messageDots: MessageDots): Promise<import("./schema/message.schema").messageDocument>;
    renderAllMessages(): Promise<(import("./schema/message.schema").Message & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
