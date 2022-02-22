import path from "path";
import url from "url";

import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { Link, useLocation } from "react-router-dom";

export const components = {
  img: (props) => <img {...props} />,
  a: ({ href, ...props }) => {
    const { pathname: root } = useLocation();
    const to = path.resolve(root, href);
    const isURL = !!url.parse(href).protocol;
    const Tag = isURL ? "a" : Link;
    const uri = {
      [isURL ? "href" : "to"]: isURL ? href : to,
    };
    return <Tag {...props} {...uri} />;
  },
  Theme: ({ children, ...theme }) => {
    theme = Object.entries(theme).map(([key, val]) => `  --${key}: ${val};`);
    theme = [`:root {`, ...theme, `}`].join("\n");
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: theme }} />
        {children}
      </React.Fragment>
    );
  },
};

export const MDXContext = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXContext;
