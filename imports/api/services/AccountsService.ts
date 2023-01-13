import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { IAccountUserDto } from "/imports/types/IAccountUserDto";

class AccountsService {
  public static async createUser({ email, name, password }: IAccountUserDto) {
    return new Promise((resolve, reject) => {
      Accounts.createUser(
        {
          email,
          password,
          profile: {
            name,
          },
        },
        (err) => {
          if (err) {
            reject(err);
          }
          resolve(true);
        }
      );
    });
  }

  public static async loginWithPassword({ email, password }: IAccountUserDto) {
    return new Promise((resolve, reject) => {
      Meteor.loginWithPassword(email, password, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }

  public static async logout() {
    return new Promise((resolve, reject) => {
      Meteor.logout((err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
}

export default AccountsService;
