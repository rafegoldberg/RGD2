import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./routes";
import "./styles/main.scss";

const elem = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(elem, document.getElementById("App"));
