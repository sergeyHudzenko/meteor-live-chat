import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { IAuthContext } from "../../../types/IAuthContext";

export const useAuth = (): IAuthContext => {
  return useContext(AuthContext);
};
