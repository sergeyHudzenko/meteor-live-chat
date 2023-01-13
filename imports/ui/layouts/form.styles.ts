import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: auto;
`;

export const FormTitle = styled.h1`
  font-size: var(--font-size-title);
  font-weight: var(--font-weigth-title);
  margin-bottom: 30px;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  padding: 12px 20px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-bottom: 20px;
  box-shadow: var(--box-shadow);
  ::placeholder {
    color: var(--font-color-placeholder);
  }
`;

export const FormButton = styled.button`
  background-color: var(--action-color);
  color: var(--font-color-light);
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 5px;
  :hover {
    filter: brightness(110%) saturate(140%);
  }
  :disabled {
    filter: opacity(20%);
  }
`;
