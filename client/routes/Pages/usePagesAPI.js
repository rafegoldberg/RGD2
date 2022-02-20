import useSWR from "swr";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const { SERVER_URI = "" } = process.env;

const fetcher = async (path, callback) => {
  const url = `${SERVER_URI}/api/${path}`;
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok) {
    const error = new Error(json.message);
    error.status = res.status;
    Object.assign(error, json);
    throw error;
  }
  if (typeof callback === "function") callback(json);
  return json;
};

const usePagesAPI = (path, initial) => {
  const res = useSWR(`pages/${path ?? ""}`, fetcher);
  return {
    pages: res.data,
    isLoading: !res.error && !res.data,
    isError: res.error,
  };
};

export default usePagesAPI;
