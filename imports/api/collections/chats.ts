import { Mongo } from "meteor/mongo";

export interface IChat {
  _id?: string;
  users: string[];
  lastMessage?: string;
  lastMessageAt?: Date;
  messages: IMessage[];
}

export interface IMessage {
  createdAt: Date;
  text: string;
  user: string;
}

export const ChatsCollection = new Mongo.Collection<IChat>("chats");
