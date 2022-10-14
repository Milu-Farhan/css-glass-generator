import React from "react";
import gitIcon from "../images/github.svg";
import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <img className="titleIcon" src={Logo} alt="glassmorphism logo" />
        <h3>Glass UI </h3>
      </div>
      <a
        href="https://github.com/Milu-Farhan?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img src={gitIcon} alt="Github logo" width="30px" />
      </a>
    </div>
  );
};

export default Header;
