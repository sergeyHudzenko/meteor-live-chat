import { createContext } from "react";
import { IChatContext } from "/imports/types/IChatContext";

export const ChatContext = createContext<IChatContext>({
  selectChat: () => {},
});
