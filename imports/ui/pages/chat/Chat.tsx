import React from "react";
import { ChatList } from "../../components/chatList/ChatList";
import { Conversation } from "../../components/conversation/Conversation";
import { ChatContainer } from "./Chat.styles";

export const Chat = () => {
  return (
    <ChatContainer>
      <ChatList></ChatList>
      <Conversation></Conversation>
    </ChatContainer>
  );
};
