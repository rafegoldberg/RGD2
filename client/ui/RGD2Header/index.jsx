import React from "react";

import "./style.scss";
import LogoSVG from "./logo.svg";
import { useNavigate } from "react-router-dom";

const Header = ({ children, ...props }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <header className="RGD2" onClick={handleClick}>
      <LogoSVG height={150} />
      <h1>RGD2</h1>
    </header>
  );
};

export default Header;
