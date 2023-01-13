import React from "react";
import { ActionIcon } from "../../layouts/icon.styles";
import {
  NewChatActionBar,
  NewChatContainer,
  NewChatItem,
  NewChatItems,
  NewChatTitle,
} from "./NewChat.styles";
import { useAuth } from "/imports/api/providers/auth/useAuth";
import { useChat } from "/imports/api/providers/chat/useChat";
import { useUsers } from "/imports/api/providers/users/useUsers";
import { ChatService } from "/imports/api/services/ChatService";

export const NewChat = ({
  showNewChat,
  toggleNewChatAction,
}: {
  showNewChat: boolean;
  toggleNewChatAction: () => void;
}) => {
  const usersContext = useUsers();
  const auth = useAuth();
  const chatContext = useChat();

  const newChatHandler = async (userId: string) => {
    try {
      const createdChat = await ChatService.create(userId);
      chatContext.selectChat(createdChat?._id!);
      toggleNewChatAction();
    } catch (error) {
      console.error({ error });
    }
  };

  const users = (() =>
    usersContext.users
      .filter((user) => user.id !== auth.user?.id)
      .map((user) => (
        <NewChatItem
          key={user.id}
          onClick={() => {
            newChatHandler(user.id);
          }}
        >
          {user.name}
        </NewChatItem>
      )))();

  if (showNewChat) {
    return (
      <NewChatContainer>
        <NewChatActionBar>
          <ActionIcon
            onClick={() => {
              toggleNewChatAction();
            }}
            src="/img/arrow-back.svg"
          ></ActionIcon>
          <NewChatTitle>New chat</NewChatTitle>
        </NewChatActionBar>
        <NewChatItems>{users}</NewChatItems>
      </NewChatContainer>
    );
  }
  return <></>;
};
