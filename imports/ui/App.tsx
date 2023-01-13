import React from "react";
import { Toaster } from "react-hot-toast";
import { Account } from "./pages/account/Account";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Chat } from "./pages/chat/Chat";
import { ProvideAuth } from "../api/providers/auth/ProvideAuth";
import { PrivateRoute } from "../api/providers/auth/PrivateRoute";
import { ProvideUsers } from "../api/providers/users/ProvideUsers";
import { ProvideChat } from "../api/providers/chat/ProvideChat";

export const App = () => (
  <>
    <Toaster position="bottom-center" />
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Account />
          </Route>
          <PrivateRoute path="/chat">
            <ProvideUsers>
              <ProvideChat>
                <Chat />
              </ProvideChat>
            </ProvideUsers>
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  </>
);
