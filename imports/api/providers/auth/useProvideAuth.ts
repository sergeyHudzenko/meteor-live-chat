import { useEffect, useState } from "react";
import { ILoggedUser } from "/imports/types/ILoggedUser";
import { IAuthContext } from "../../../types/IAuthContext";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import AccountsService from "../../services/AccountsService";
import { IAccountUserDto } from "/imports/types/IAccountUserDto";

export const useProvideAuth = (): IAuthContext => {
  const [user, setUser] = useState<ILoggedUser>();
  const [isLogged, setIslogged] = useState<boolean>(true);

  const currentUser = useTracker(() => Meteor.user(), []);
  const loggedUserId = useTracker(() => Meteor.userId(), []);

  useEffect(() => {
    const { emails, _id, profile } = currentUser || {};

    setUser({
      email: emails ? emails[0].address : "",
      id: _id || "",
      name: profile?.name || "",
    });
  }, [currentUser]);

  useEffect(() => {
    setIslogged(!!loggedUserId);
  }, [loggedUserId]);

  const signIn = async (userData: IAccountUserDto) => {
    await AccountsService.loginWithPassword(userData);
    setIslogged(true);
  };

  const logout = async () => {
    await AccountsService.logout();
  };

  const signUp = async (userData: IAccountUserDto) => {
    await AccountsService.createUser(userData);
    setIslogged(true);
  };

  return {
    user,
    isLogged,
    signIn,
    signUp,
    logout,
  };
};
