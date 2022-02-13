import React from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { useClassy } from "use-classy";

import useFetchPages from "./useFetchPages";

const PagesWrap = () => {
  const { search: qry } = useLocation();
  const { title } = useParams();
  const [pages] = useFetchPages();
  const bem = useClassy("Pages");
  const oneof = !(title || qry);
  return (
    <div className={bem()}>
      <h3>
        <Link style={{ marginLeft: "-.9em" }} to={!oneof ? "/pages" : "/"}>
          ←
        </Link>
        {oneof
          ? "All Pages"
          : pages?.length > 1
          ? "Pages"
          : pages?.[0]?.title || title}
      </h3>
      <Outlet context={pages} />
    </div>
  );
};

export default PagesWrap;
