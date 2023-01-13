import React from "react";
import { RouteProps } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useProvideAuth } from "./useProvideAuth";

export const ProvideAuth = ({ children }: RouteProps) => {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
