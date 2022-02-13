import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";
import { useClassy } from "use-classy";

const Page = (props) => {
  const fromProps = !!Object.keys(props).length;
  const pages = useOutletContext();
  const bem = useClassy("Page");
  return (
    <details>
      <summary>{(fromProps ? props : pages?.[0])?.body || null}</summary>
      <pre className={bem()}>
        <code>{JSON.stringify(fromProps ? props : pages?.[0], null, 2)}</code>
      </pre>
    </details>
  );
};

export default Page;
