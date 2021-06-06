export class ChatMessage {
    constructor(public userId: string,
        public message: string,
        public type: MsgType) {

    } 
    
}

export enum MsgType {
    CHAT, LEAVE, JOIN
}