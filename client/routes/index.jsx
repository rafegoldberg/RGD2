import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminDash from "./Admin";

import Home from "./Home";

import User from "./User";
import Users from "./User/List";
import UsersWrap from "./User/Wrap";

import Page from "./Pages";
import Pages from "./Pages/List";
import PagesWrap from "./Pages/Wrap";

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
      <Route path="pages" element={<PagesWrap />}>
        <Route path=":title" element={<Page />} />
        <Route index element={<Pages />} />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  </React.Fragment>
);

export default AppRouter;
