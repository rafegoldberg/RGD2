import React, { Fragment } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useClassy } from "use-classy";

import User from ".";

const PagesList = ({
  children,
  tag: Tag = "li",
  wrap: Wrap = "ul",
  ...props
}) => {
  const pages = useOutletContext();
  const bem = useClassy("PagesList");
  const wrapProps = Wrap !== Fragment ? { className: bem() } : {};
  return (
    <Wrap {...wrapProps}>
      {pages &&
        pages.map((pg) => (
          <Tag key={bem(`-${pg.id}`)} className={bem("-item")}>
            <Link
              className={bem(Tag === Fragment && "-item", "-link")}
              to={`/pages/${pg.title}`}
            >
              {pg.title}
            </Link>
          </Tag>
        ))}
    </Wrap>
  );
};

export default PagesList;
