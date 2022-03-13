import React from "react";
import { Link } from "react-router-dom";

const ProjectHeader = ({ children }) => (
  <h2 className="Page_project-header">
    <Link to="./..">←</Link>
    {children}
  </h2>
);

export default ProjectHeader;
