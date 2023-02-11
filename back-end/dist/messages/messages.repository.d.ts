import { Model } from 'mongoose';
import { MessageDots } from './Dots/message.dots';
import { messageDocument } from './schema/message.schema';
export declare class MessagesRepository {
    private messageModel;
    constructor(messageModel: Model<messageDocument>);
    createMessage(messageDots: MessageDots): Promise<messageDocument>;
    renderAllMessages(): Promise<(import("./schema/message.schema").Message & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
