import { createContext } from "react";
import { IAuthContext } from "../../../types/IAuthContext";

export const AuthContext = createContext<IAuthContext>({
  signIn: async () => {},
  signUp: async () => {},
  logout: async () => {},
});
