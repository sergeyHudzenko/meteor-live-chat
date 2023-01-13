import styled from "styled-components";

export const ChatListContainer = styled.div`
  max-width: 400px;
  width: 40%;
  display: flex;
  flex-direction: column;
  background-color: var(--background-color-light);
  position: relative;
`;

export const ChatListItems = styled.div`
  flex: auto;
  overflow-y: auto;
`;

export const ChatListItem = styled.div<{ active: boolean }>`
  padding: 10px 25px;
  border-bottom: 1px solid var(--background-color);
  display: flex;
  flex-direction: row;
  cursor: pointer;
  transition: 0.5s;
  background-color: ${(props) =>
    props.active ? "var(--background-color)" : "white"};
  :hover {
    background-color: var(--background-color);
  }
`;

export const ListItemData = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItemDate = styled.div`
  flex: auto;
  text-align: right;
  font-size: 12px;
`;

export const ChatUserName = styled.div``;

export const ChatLastMessage = styled.div`
  font-size: 14px;
  margin-top: 5px;
  min-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
