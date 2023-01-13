import { Meteor } from "meteor/meteor";
import { IChat } from "../collections/chats";
import { DateTime } from "luxon";

export class ChatService {
  static async create(userId: string): Promise<IChat | null> {
    return new Promise((resolve, reject) => {
      Meteor.apply("chatsCreate", [userId], {}, (err, result) => {
        if (err) {
          reject(null);
        }
        resolve(result as unknown as IChat);
      });
    });
  }

  static async sendNewMessage(chatId: string, message: string) {
    return new Promise((resolve, reject) => {
      Meteor.apply(
        "chatsNewMessage",
        [chatId, message],
        { noRetry: true, wait: true },
        (err) => {
          if (err) {
            reject(null);
          }
          resolve(true);
        }
      );
    });
  }

  static getMessageTime(dateTime: Date | undefined): string {
    if (dateTime) {
      const parsedDate = DateTime.fromISO(dateTime.toISOString());
      return parsedDate.toLocaleString(DateTime.TIME_24_SIMPLE);
    }
    return "";
  }
}
