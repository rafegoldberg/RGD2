import React from "react";

import "./style.scss";
import LogoSVG from "./logo.svg";

const Header = ({ children, ...props }) => (
  <header className="RGD2">
    <LogoSVG height={150} />
    <h1>RGD2</h1>
  </header>
);

export default Header;
