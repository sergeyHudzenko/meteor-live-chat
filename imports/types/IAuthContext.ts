import { IAccountUserDto } from "./IAccountUserDto";
import { ILoggedUser } from "./ILoggedUser";

export interface IAuthContext {
  user?: ILoggedUser;
  isLogged?: boolean;
  signIn: (userData: IAccountUserDto) => Promise<void>;
  signUp: (userData: IAccountUserDto) => Promise<void>;
  logout: () => Promise<void>;
}
