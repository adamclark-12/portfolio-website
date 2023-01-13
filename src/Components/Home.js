import React from "react";

const Home = () => {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Adam</strong>
      </h1>

      <p className="section__subtitle section__subtitle--intro">
        <strong>front-end dev</strong>
      </p>
      <img
        src="./img/FrontendDevIcon.png"
        alt="a generic picture of a frontend web development icon"
        className="intro__img"
      ></img>
    </section>
  );
};
export default Home;
