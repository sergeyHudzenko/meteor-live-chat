import React from "react";
import { ActionIcon } from "../../layouts/icon.styles";
import { ChatsActionBarContainer, UserName } from "./ChatListActionbar.styles";

export const ChatListActionBar = ({
  userName,
  logoutAction,
  toggleNewChatAction,
}: {
  userName: string;
  logoutAction: () => void;
  toggleNewChatAction: () => void;
}) => (
  <ChatsActionBarContainer>
    <ActionIcon
      onClick={() => {
        logoutAction();
      }}
      src="/img/logout.svg"
    ></ActionIcon>
    <UserName>{userName}</UserName>
    <ActionIcon
      onClick={() => {
        toggleNewChatAction();
      }}
      src="/img/new-chat.svg"
    ></ActionIcon>
  </ChatsActionBarContainer>
);
