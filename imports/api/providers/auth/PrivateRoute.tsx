import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "./useAuth";

export function PrivateRoute({ children, ...rest }: RouteProps): JSX.Element {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.isLogged ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
