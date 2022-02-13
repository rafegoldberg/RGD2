import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const { SERVER_URI = "" } = process.env;

const fetcher = async (filter, callback) => {
  const qry = new URLSearchParams(filter);
  const res = await fetch(`${SERVER_URI}/api/users?${qry}`);
  const json = await res.json();
  if (typeof callback === "function") callback(json);
  return json;
};

const useFetchUsers = (initial) => {
  const { search } = useLocation();
  const params = useParams();
  const [list, setList] = useState(initial);

  useEffect(() => {
    const filter = {
      ...Object.fromEntries(new URLSearchParams(search).entries()),
      ...params,
    };
    if (!initial) fetcher(filter, setList);
  }, [params, search]);

  return [list, setList];
};

export default useFetchUsers;
