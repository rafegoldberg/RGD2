import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { useClassy } from "use-classy";
import { SWRConfig } from "swr";

import RGD2Header from "../../ui/RGD2Header";

import usePagesAPI from "./usePagesAPI";
import Pages from "./List";

const { HOMEPAGE } = process.env;

const PagesWrap = () => {
  const bem = useClassy("Pages");
  let { slug, ["*"]: path } = useParams();
  const res = usePagesAPI(
    slug || path?.split("/")?.reverse?.()?.[0] || HOMEPAGE
  );
  return (
    <div className={bem()}>
      <SWRConfig value={{ revalidateIfStale: false }}>
        <RGD2Header />
        <Pages />
      </SWRConfig>
      <div>
        <Outlet context={res} />
      </div>
    </div>
  );
};

export default PagesWrap;
