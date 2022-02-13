import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useClassy } from "use-classy";

import useFetchUsers from "./useFetchUsers";

const UsersWrap = () => {
  const { search: qry } = useLocation();
  const { username } = useParams();
  const [users] = useFetchUsers();
  const bem = useClassy("UsersWrap");
  const oneof = !(username || qry);
  return (
    <div className={bem()}>
      <h3>
        <Link to={!oneof ? "/users" : "/"}>←</Link>
        {oneof
          ? "All Users"
          : users?.length > 1
          ? "Users"
          : users?.[0]?.displayName || username}
      </h3>
      <Outlet context={users} />
    </div>
  );
};

export default UsersWrap;
