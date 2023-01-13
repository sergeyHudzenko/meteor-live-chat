import { createContext } from "react";
import { IUsersContext } from "/imports/types/IUsersContext";

export const UsersContext = createContext<IUsersContext>({
  users: [],
  isLoading: false,
});
