import React from "react";

export const Nav = () => {
  return (
    <nav className="nav">
      {
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link"></a>Home
          </li>
          <li className="nav__item">
            <a href="#teckStack" className="nav__link"></a>Tech Stack
          </li>
          <li className="nav__item">
            <a href="#github" className="nav__link"></a>GitHub
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link"></a>Contact
          </li>
        </ul>
      }
    </nav>
  );
};
