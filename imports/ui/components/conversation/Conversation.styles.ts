import styled from "styled-components";

export const ConversationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ConversationActionBar = styled.div`
  height: var(--action-bar-height);
  background-color: var(--background-color);
  border-bottom: 1px solid var(--background-bar-color);
  display: flex;
  align-items: center;
`;

export const UserName = styled.span`
  margin-left: 25px;
`;

export const ConversationMessagesContainer = styled.div`
  background-color: var(--messages-background-color);
  overflow-y: auto;
  flex: 1;
`;

export const MessageContainer = styled.div<{ isReceived: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isReceived ? "flex-start" : "flex-end")};
  margin: 20px;
`;

export const MessageContent = styled.div<{ isReceived: boolean }>`
  background-color: ${(props) =>
    props.isReceived
      ? "var(--background-color-light)"
      : "var(--sent-message-background)"};
  max-width: 40%;
  border-radius: ${(props) =>
    props.isReceived ? "0 10px 10px 10px" : "10px 0 10px 10px"};
  box-shadow: var(--box-shadow);
  padding: 10px;
  display: flex;
  flex-direction: ${(props) => (props.isReceived ? "row" : "row-reverse")};
  align-items: flex-end;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 0 5px;
`;

export const MessageDate = styled.span`
  font-size: 10px;
  color: var(--font-color-default);
  margin: 0 5px;
`;

export const MessageInput = styled.input`
  padding: 12px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-left: 20px;
  width: 100%;
  box-shadow: var(--box-shadow);
  ::placeholder {
    color: var(--font-color-placeholder);
  }
`;
