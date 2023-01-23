import { useState } from "react";

const Header = () => {
  const [navToggled, setNavToggled] = useState(false);
  <script src="navJS.js"></script>;
  return (
    <header>
      <div className="logo">
        <img src="./img/devAdam-01.png" alt="Adam Dev icon"></img>
      </div>
      <button
        className="nav-toggle"
        aria-label="toggle navigation"
        onClick={() => {
          setNavToggled(!navToggled);
          console.log = "clicked";
        }}
      >
        <span
          className={navToggled ? " hamburger hamburger::after" : "hamburger"}
          //   className={
          //     navToggled ? "hamburger ::before" : "hamburger hamburger::after"
          //   }
        ></span>
      </button>
      <nav
        className={
          navToggled
            ? "hamburger::before"
            : "nav nav-open nav-toggle  hamburger::before"
        }
      >
        {
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link"></a>Home
            </li>
            <li className="nav__item">
              <a href="#techStack" className="nav__link"></a>Tech Stack
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
    </header>
  );
};
export default Header;
