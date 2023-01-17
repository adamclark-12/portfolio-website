import React from "react";
import Nav from "./Nav";
//import navJS from "../navJS";

const Header = () => {
  //const navToggle = document.querySelector(".nav-toggle");

  //   const navLinks = document.querySelectorAll(".nav__link");

  //   navToggle.addEventListener("click", () => {
  //     document.body.classList.toggle("nav-open");
  //   });

  //   navLinks.forEach((link) => {
  //     link.addEventListener("click", () => {
  //       document.body.classList.remove("nav-open");
  //     });
  //   });
  <script src="navJS.js"></script>;
  return (
    <header>
      <div className="logo">
        <img src="./img/devAdam-01.png"></img>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        //onClick={this.navToggle}
      >
        <span className="hamburger"></span>
      </button>
      <Nav />
    </header>
  );
};
export default Header;
