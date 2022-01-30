import React from "react";
import { Route, Routes as Switch } from "react-router-dom";

import User from "./User";
import UserList from "./User/List";

const AppRouter = () => (
  <Switch>
    <Route path="users/" element={<UserList />}>
      <Route path=":username" />
    </Route>
    <Route path="*" element={<h3>Fallback Route</h3>} />
  </Switch>
);

export default AppRouter;
