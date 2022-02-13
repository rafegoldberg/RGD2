import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <React.Fragment>
    <h3>Home</h3>
    <ul>
      <li>
        <Link to="/users">All Users</Link>
      </li>
    </ul>
  </React.Fragment>
);

export default HomePage;
