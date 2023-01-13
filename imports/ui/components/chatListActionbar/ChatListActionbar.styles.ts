import styled from "styled-components";

export const ChatsActionBarContainer = styled.div`
  display: flex;
  background-color: var(--action-bar-background);
  height: var(--action-bar-height);
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const UserName = styled.span`
  color: var(--font-color-light);
  font-size: var(--font-size-default);
  flex: auto;
`;
