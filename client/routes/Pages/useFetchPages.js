import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const { SERVER_URI = "" } = process.env;
console.log(SERVER_URI);

const fetcher = async (filter, callback) => {
  const qry = new URLSearchParams(filter);
  const url = `${SERVER_URI}/api/pages?${qry}`;
  console.log(url);
  const res = await fetch(url);
  const json = await res.json();
  if (typeof callback === "function") callback(json);
  return json;
};

const useFetchPages = (initial) => {
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

export default useFetchPages;
