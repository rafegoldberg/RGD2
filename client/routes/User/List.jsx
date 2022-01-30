import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import User from ".";

const fetcher = async (setter, filter) => {
  const qry = new URLSearchParams(filter);
  const res = await fetch(`http://localhost:5678/users?${qry}`);
  const json = await res.json();
  if (typeof setter === "function") setter(json);
  return json;
};

const UserList = ({ tag: Tag = Fragment, wrap: Wrap = Fragment }) => {
  const params = useParams();
  const [list, setList] = useState();
  useEffect(() => fetcher(setList, params), []);
  return (
    <Wrap>
      {list &&
        list.map((v) => (
          <Tag>
            <User {...v} />
          </Tag>
        ))}
    </Wrap>
  );
};

export default UserList;
