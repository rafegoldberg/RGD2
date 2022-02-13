import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { useClassy } from "use-classy";

const User = (props) => {
  const fromProps = !!Object.keys(props).length;
  const users = useOutletContext();
  const bem = useClassy("User");
  return (
    <pre className={bem()}>
      <code>{JSON.stringify(fromProps ? props : users?.[0], null, 2)}</code>
    </pre>
  );
};

export default User;
