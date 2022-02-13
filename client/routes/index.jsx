import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminDash from "./Admin";

import Home from "./Home";
import User from "./User";
import Users from "./User/List";
import UsersWrap from "./User/Wrap";

const AppRouter = () => (
  <React.Fragment>
    <Routes>
      <Route path="*" element={<AdminDash />} />
    </Routes>
    <Routes>
      <Route element={<AdminDash />} />
      <Route path="users" element={<UsersWrap />}>
        <Route path=":username" element={<User />} />
        <Route index element={<Users />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  </React.Fragment>
);

export default AppRouter;
