import { useState } from "react";
import { ILoggedUser } from "/imports/types/ILoggedUser";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { IUsersContext } from "/imports/types/IUsersContext";

export const useProvideUsers = (): IUsersContext => {
  const [users, setUsers] = useState<ILoggedUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useTracker(() => {
    const { ready } = Meteor.subscribe("usersAll");
    const databaseUsers = Meteor.users
      .find()
      .fetch()
      .map((user) => ({
        id: user._id,
        name: user.profile.name,
        email: user.emails![0].address,
      }));
    setIsLoading(!ready());
    if (ready()) {
      setUsers(databaseUsers);
    }
  }, []);

  return {
    users,
    isLoading,
  };
};
