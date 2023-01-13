export interface IChatContext {
  currentChatId?: string;
  selectChat: (chatId: string) => void;
}
