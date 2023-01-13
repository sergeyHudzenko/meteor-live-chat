import { useContext } from "react";
import { IChatContext } from "/imports/types/IChatContext";
import { ChatContext } from "./ChatContext";

export const useChat = (): IChatContext => {
  return useContext(ChatContext);
};
