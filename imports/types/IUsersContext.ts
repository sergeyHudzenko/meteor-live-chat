import { ILoggedUser } from "./ILoggedUser";

export interface IUsersContext {
  users: ILoggedUser[];
  isLoading: boolean;
}
