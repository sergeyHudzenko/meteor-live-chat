import { useState } from "react";
import { IChatContext } from "/imports/types/IChatContext";

export const useProvideChat = (): IChatContext => {
  const [currentChatId, setCurrentChatId] = useState<string>("");

  const selectChat = (chatId: string) => setCurrentChatId(chatId);

  return {
    selectChat,
    currentChatId,
  };
};
