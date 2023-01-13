import { useFind } from "meteor/react-meteor-data";
import React, { useEffect, useRef, useState } from "react";
import { ActionIcon } from "../../layouts/icon.styles";
import {
  ConversationActionBar,
  ConversationContainer,
  ConversationMessagesContainer,
  Message,
  MessageContainer,
  MessageContent,
  MessageDate,
  MessageInput,
  UserName,
} from "./Conversation.styles";
import { ChatsCollection } from "/imports/api/collections/chats";
import { useAuth } from "/imports/api/providers/auth/useAuth";
import { useChat } from "/imports/api/providers/chat/useChat";
import { ChatService } from "/imports/api/services/ChatService";
import { UsersService } from "/imports/api/services/UsersService";

export const Conversation = () => {
  const chatContext = useChat();
  const authContext = useAuth();
  const [newMessage, setNewMessage] = useState<string>("");
  const [messagesElement, setMessagesElement] = useState<HTMLDivElement>();

  const chat = useFind(
    () => ChatsCollection.find({ _id: chatContext.currentChatId }),
    [chatContext.currentChatId]
  )[0];

  const sendMessageHandler = async () => {
    if (newMessage) {
      try {
        ChatService.sendNewMessage(chatContext.currentChatId!, newMessage);
        setNewMessage("");
      } catch (error) {
        console.log({ error });
      }
    }
  };

  useEffect(() => {
    if (messagesElement) {
      messagesElement.scrollTop = messagesElement?.scrollHeight;
    }
  }, [chat]);

  const messages = () => {
    return chat.messages.map((message) => {
      const isReceived = authContext.user?.id !== message.user;

      return (
        <MessageContainer
          key={message.createdAt.valueOf()}
          isReceived={isReceived}
        >
          <MessageContent isReceived={isReceived}>
            <Message>{message.text}</Message>
            <MessageDate>
              {ChatService.getMessageTime(message.createdAt)}
            </MessageDate>
          </MessageContent>
        </MessageContainer>
      );
    });
  };

  return (
    <ConversationContainer>
      {chatContext.currentChatId ? (
        <>
          <ConversationActionBar>
            <UserName>{UsersService.getChatUser(chat)?.name}</UserName>
          </ConversationActionBar>
          <ConversationMessagesContainer
            ref={(ref) => {
              setMessagesElement(ref!);
            }}
          >
            {messages()}
          </ConversationMessagesContainer>
          <ConversationActionBar>
            <MessageInput
              placeholder="Type something..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  sendMessageHandler();
                }
              }}
              onChange={(e) => {
                setNewMessage(e.target.value);
              }}
              value={newMessage}
            ></MessageInput>
            <ActionIcon
              onClick={() => {
                sendMessageHandler();
              }}
              src="/img/send.svg"
            />
          </ConversationActionBar>
        </>
      ) : (
        <ConversationMessagesContainer></ConversationMessagesContainer>
      )}
    </ConversationContainer>
  );
};
