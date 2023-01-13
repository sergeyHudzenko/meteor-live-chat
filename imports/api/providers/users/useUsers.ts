import { useContext } from "react";
import { IUsersContext } from "/imports/types/IUsersContext";
import { UsersContext } from "./UsersContext";

export const useUsers = (): IUsersContext => {
  return useContext(UsersContext);
};
