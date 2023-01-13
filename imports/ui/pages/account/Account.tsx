import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Form,
  FormButton,
  FormInput,
  FormLabel,
  FormTitle,
} from "../../layouts/form.styles";
import {
  AccountContainer,
  AccountSignInContainer,
  AccountCreateContainer,
} from "./Account.styles";
import toast from "react-hot-toast";
import { IAccountUserDto } from "/imports/types/IAccountUserDto";
import { useHistory } from "react-router";
import { useAuth } from "../../../api/providers/auth/useAuth";

export const Account = () => {
  let history = useHistory();
  const auth = useAuth();

  const [user, setUser] = useState<IAccountUserDto>({
    email: "",
    name: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const redirect = () => {
    setTimeout(() => {
      history.push("/chat");
    }, 1000);
  };

  const createUserHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await auth.signUp(user);
      redirect();
    } catch (error: any) {
      setLoading(false);
      toast.error(error.reason);
    }
  };

  const signInUserHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      await auth.signIn(user);
      redirect();
    } catch (error: any) {
      setLoading(false);
      toast.error(error.reason);
    }
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = event.target;
    setUser({ ...user, ...{ [id]: value } });
  };

  return (
    <AccountContainer>
      <AccountSignInContainer>
        <Form onSubmit={signInUserHandler}>
          <FormTitle>Sign In</FormTitle>
          <FormLabel htmlFor="signInEmail">Email</FormLabel>
          <FormInput
            placeholder="john.doe@email.com"
            onChange={(e) => inputHandler(e, "email")}
            id="signInEmail"
          ></FormInput>
          <FormLabel htmlFor="signInPassword">Password</FormLabel>
          <FormInput
            id="signInPassword"
            placeholder="******"
            type="password"
            onChange={(e) => inputHandler(e, "password")}
          ></FormInput>
          <FormButton disabled={loading} type="submit">
            Sign In
          </FormButton>
        </Form>
      </AccountSignInContainer>
      <AccountCreateContainer>
        <Form onSubmit={createUserHandler}>
          <FormTitle>Create account</FormTitle>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            placeholder="John Doe"
            id="name"
            onChange={(e) => inputHandler(e, "name")}
          ></FormInput>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder="john.doe@email.com"
            id="email"
            onChange={(e) => inputHandler(e, "email")}
          ></FormInput>
          <FormLabel>Password</FormLabel>
          <FormInput
            id="password"
            onChange={(e) => inputHandler(e, "password")}
            placeholder="******"
            type="password"
          ></FormInput>
          <FormButton disabled={loading} type="submit">
            Create
          </FormButton>
        </Form>
      </AccountCreateContainer>
    </AccountContainer>
  );
};
