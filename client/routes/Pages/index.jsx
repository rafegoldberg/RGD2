import React from "react";
import MDX from "@mdx-js/runtime";
import { Link, useOutletContext } from "react-router-dom";
import { useClassy } from "use-classy";

import "./style.scss";

const { HOMEPAGE } = process.env;

const CustomLink = ({ href: to, ...props }) => <Link {...props} to={to} />;

const Page = ({ children, ...props }) => {
  const { pages, isError: err } = useOutletContext();
  const page = pages?.[0] || props;
  const bem = useClassy("Page");
  const isHome = page?.title === HOMEPAGE;
  return (
    <article className={bem()}>
      {err && (
        <header>
          <h2>{err.title}</h2>
          <p>{err.message}</p>
        </header>
      )}
      {(!err && children) || (
        <React.Fragment>
          {!isHome && <h2>{page?.displayTitle || page?.title}</h2>}
          <MDX components={{ a: CustomLink }}>{page?.body}</MDX>
        </React.Fragment>
      )}
    </article>
  );
};

export default Page;
