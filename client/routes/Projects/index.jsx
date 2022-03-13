import React from "react";
import { Link, useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";

import Page from "../Pages";
import * as projects from "./*/index.mdx";
import ProjectHeader from "./Header";

import "./style.scss";

const ProjectsPage = (props) => {
  const { slug } = useParams();
  const { default: Project } = projects?.[slug] || {};
  return (
    <MDXProvider components={{ ProjectHeader }}>
      <Page className="_project">
        {Project ? (
          <Project />
        ) : (
          <React.Fragment>
            <h2>Sorry, we got lost.</h2>
            <p>
              We couldn't find this project…&nbsp;
              <Link to="./..">
                Go <b>back</b>
              </Link>
              .
            </p>
          </React.Fragment>
        )}
      </Page>
    </MDXProvider>
  );
};

export default ProjectsPage;
