import React, { Fragment } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useClassy } from "use-classy";

import User from ".";

const UsersList = ({
  children,
  tag: Tag = "li",
  wrap: Wrap = "ul",
  ...props
}) => {
  const users = useOutletContext();
  const bem = useClassy("UsersList");
  const wrapProps = Wrap !== Fragment ? { className: bem() } : {};
  return (
    <Wrap {...wrapProps}>
      {users &&
        users.map((usr) => (
          <Tag key={bem(`-${usr.id}`)} className={bem("-item")}>
            <Link
              className={bem(Tag === Fragment && "-item", "-link")}
              to={`/users/${usr.username}`}
            >
              {usr.displayName}
            </Link>
          </Tag>
        ))}
    </Wrap>
  );
};

export default UsersList;
