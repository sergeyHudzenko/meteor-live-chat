import React from "react";
import { RouteProps } from "react-router-dom";
import { useProvideUsers } from "./useProvideUsers";
import { UsersContext } from "./UsersContext";

export const ProvideUsers = ({ children }: RouteProps) => {
  const users = useProvideUsers();

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};
