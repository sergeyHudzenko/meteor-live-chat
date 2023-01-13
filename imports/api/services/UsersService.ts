import { Meteor } from "meteor/meteor";
import { IChat } from "../collections/chats";
import { useUsers } from "../providers/users/useUsers";
import { ILoggedUser } from "/imports/types/ILoggedUser";

export class UsersService {
  static getChatUser(chat: IChat): ILoggedUser | undefined {
    const usersContext = useUsers();
    const currentUserId = Meteor.userId();
    if (chat && chat.users) {
      const userId = chat.users.find((user) => currentUserId !== user);
      return usersContext.users.find((user) => user.id === userId);
    }
    return { email: "", id: "", name: "" };
  }
}
