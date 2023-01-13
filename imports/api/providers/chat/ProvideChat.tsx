import React from "react";
import { RouteProps } from "react-router-dom";
import { ChatContext } from "./ChatContext";
import { useProvideChat } from "./useProvideChat";

export const ProvideChat = ({ children }: RouteProps) => {
  const users = useProvideChat();

  return <ChatContext.Provider value={users}>{children}</ChatContext.Provider>;
};
