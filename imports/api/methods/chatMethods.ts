import { Meteor } from "meteor/meteor";
import { ChatsCollection } from "../collections/chats";

Meteor.methods({
  async chatsCreate(userId: string) {
    const currentUserId = Meteor.userId();
    if (!currentUserId) {
      throw new Error("not auth");
    }
    const existentChat = ChatsCollection.findOne({
      $and: [{ users: { $in: [userId] } }, { users: { $in: [currentUserId] } }],
    });

    if (existentChat) {
      return existentChat;
    }

    return ChatsCollection.insert({
      messages: [],
      users: [userId, currentUserId],
    });
  },
  async chatsNewMessage(chatId, message) {
    const currentUserId = Meteor.userId();
    if (!currentUserId) {
      throw new Error("not auth");
    }
    const messageDate = new Date();
    ChatsCollection.update(
      { _id: chatId },
      {
        $set: { lastMessage: message, lastMessageAt: messageDate },
        $push: {
          messages: {
            text: message,
            user: currentUserId,
            createdAt: messageDate,
          },
        },
      }
    );
  },
});
