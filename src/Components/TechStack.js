import React, { useState } from "react";
import data from "../techStackData";

const TechStack = () => {
  const [techStack] = useState(data.techStack);
  return (
    <section className="techStack" id="techStack">
      <h2 className="section__title section__title--techStack">
        Current Tech Stack
      </h2>
      <p className="section__subtitle section__subtitle--teachStack">
        This is what I am currently using
      </p>
      <div className="techStack__table">
        {techStack.map((techStack, index) => (
          <img
            className="techStack__img"
            alt={techStack.alt}
            key={index}
            src={techStack.url}
          ></img>
        ))}
        {console.log(techStack.alt)}
      </div>
    </section>
  );
};
export default TechStack;
