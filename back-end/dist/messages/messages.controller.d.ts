import { MessageDots } from './Dots/message.dots';
import { MessagesService } from './messages.service';
export declare class MessagesController {
    private messageService;
    constructor(messageService: MessagesService);
    renderAllMessages(): Promise<(import("./schema/message.schema").Message & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    ceateMessages(messageDots: MessageDots): Promise<import("./schema/message.schema").messageDocument>;
}
