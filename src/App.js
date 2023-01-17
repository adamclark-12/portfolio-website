import React from "react";
import Home from "./Components/Home";
import TechStack from "./Components/TechStack";
import Github from "./Components/Github";
import Contact from "./Components/Contact";
import Header from "./Components/Header";

import "./styles.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <TechStack />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
