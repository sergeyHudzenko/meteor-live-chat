import React, { useState } from "react";
import { ChatListActionBar } from "../chatListActionbar/ChatListActionBar";
import { NewChat } from "../newChat/NewChat";
import {
  ChatLastMessage,
  ChatListContainer,
  ChatListItem,
  ChatListItems,
  ChatUserName,
  ListItemData,
  ListItemDate,
} from "./ChatList.styles";
import { useAuth } from "../../../api/providers/auth/useAuth";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { ChatsCollection } from "../../../api/collections/chats";
import { useChat } from "/imports/api/providers/chat/useChat";
import { UsersService } from "/imports/api/services/UsersService";
import { ChatService } from "/imports/api/services/ChatService";

export const ChatList = () => {
  const [showNewChat, setShowNewChat] = useState<boolean>(false);
  const auth = useAuth();
  const chatContext = useChat();

  useSubscribe("chatsByUser");
  const chats = useFind(() =>
    ChatsCollection.find({}, { fields: { messages: 0 } })
  );

  const logoutAction = () => {
    auth.logout();
  };

  const toggleNewChatAction = () => {
    setShowNewChat(!showNewChat);
  };

  const selectChat = (chatId: string) => {
    chatContext.selectChat(chatId);
  };

  const chatItems = () => {
    return chats.map((chat) => {
      return (
        <ChatListItem
          key={chat._id}
          active={chat._id === chatContext.currentChatId}
          onClick={() => {
            selectChat(chat._id!);
          }}
        >
          <ListItemData>
            <ChatUserName>{UsersService.getChatUser(chat)?.name}</ChatUserName>
            <ChatLastMessage>{chat.lastMessage}</ChatLastMessage>
          </ListItemData>
          <ListItemDate>
            {ChatService.getMessageTime(chat.lastMessageAt)}
          </ListItemDate>
        </ChatListItem>
      );
    });
  };

  return (
    <ChatListContainer>
      <NewChat
        toggleNewChatAction={toggleNewChatAction}
        showNewChat={showNewChat}
      ></NewChat>
      <ChatListActionBar
        userName={auth.user?.name!}
        logoutAction={logoutAction}
        toggleNewChatAction={toggleNewChatAction}
      ></ChatListActionBar>
      <ChatListItems>{chatItems()}</ChatListItems>
    </ChatListContainer>
  );
};
