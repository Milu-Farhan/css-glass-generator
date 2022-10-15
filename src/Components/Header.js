import React, { useEffect } from "react";
import gitIcon from "../images/github.svg";
import Logo from "../images/logo.svg";

const Header = () => {
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const navDiv = document.querySelector(".header");
      const height = window.innerHeight;
      var scroll = window.scrollY;

      if (scroll > height - 80) {
        navDiv.classList.add("fullNav");
      } else {
        navDiv.classList.remove("fullNav");
      }
    });
  }, []);

  //
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
