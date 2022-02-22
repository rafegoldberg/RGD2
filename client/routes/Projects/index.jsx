import React from "react";
import { Link, useParams } from "react-router-dom";
import * as projects from "./*/index.mdx";
import Page from "../Pages";

const ProjectsPage = (props) => {
  const { slug } = useParams();
  const { default: Project } = projects?.[slug] || {};
  return (
    <Page>
      {Project ? (
        <Project />
      ) : (
        <React.Fragment>
          <h2>We dropped the ball. 🏀</h2>
          <p>
            Sorry, we couldn't find this project…{" "}
            <Link to="./..">
              Go <b>back</b>
            </Link>
            .
          </p>
        </React.Fragment>
      )}
    </Page>
  );
};

export default ProjectsPage;
