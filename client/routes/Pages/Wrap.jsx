import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useClassy } from "use-classy";

import usePagesAPI from "./usePagesAPI";
import Pages from "./List";
import { SWRConfig } from "swr";

const { HOMEPAGE } = process.env;

const PagesWrap = () => {
  const bem = useClassy("Pages");
  let { title, ["*"]: path } = useParams();
  const res = usePagesAPI(
    title || path?.split("/")?.reverse?.()?.[0] || HOMEPAGE
  );
  return (
    <div className={bem()}>
      <SWRConfig value={{ revalidateIfStale: false }}>
        <Pages />
      </SWRConfig>
      <Outlet context={res} />
    </div>
  );
};

export default PagesWrap;
