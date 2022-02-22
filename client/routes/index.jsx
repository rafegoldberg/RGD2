import React from "react";
import { Route, Routes } from "react-router-dom";
import { SWRConfig } from "swr";

import AdminDash from "./Admin";

import Home from "./Home";

import User from "./User";
import Users from "./User/List";
import UsersWrap from "./User/Wrap";

import Page from "./Pages";
import PagesWrap from "./Pages/Wrap";

const { HOMEPAGE } = process.env;

const swrOptions = {
  refreshInterval: 3000,
  shouldRetryOnError: false,
};

import MDXContext from "../MDX.context";
import Projects from "./Projects";

const AppRouter = () => (
  <MDXContext>
    <SWRConfig value={swrOptions}>
      <Routes>{/* <Route path="*" element={<AdminDash />} /> */}</Routes>
      <Routes>
        <Route path="/" element={<PagesWrap />}>
          <Route path="where/:slug" element={<Projects />} />
          <Route path="*" element={<Page />} />
          <Route index element={<Page />} />
        </Route>
        <Route path="users" element={<UsersWrap />}>
          <Route path=":username" element={<User />} />
          <Route index element={<Users />} />
        </Route>
      </Routes>
    </SWRConfig>
  </MDXContext>
);

export default AppRouter;
