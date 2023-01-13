import React from "react";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import TechStack from "./Components/TechStack";
import Github from "./Components/Github";
import Contact from "./Components/Contact";

import "./styles.scss";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <TechStack />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
