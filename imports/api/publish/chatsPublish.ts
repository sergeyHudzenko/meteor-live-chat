import { Meteor } from "meteor/meteor";
import { ChatsCollection } from "../collections/chats";

Meteor.publish("chatsByUser", () => {
  const currentUserId = Meteor.userId();
  if (currentUserId) {
    return ChatsCollection.find({ users: { $in: [currentUserId] } });
  }
});

Meteor.publish("chatsById", (chatId: string) => {
  return ChatsCollection.find({ _id: chatId });
});
