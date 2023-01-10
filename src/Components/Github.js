import React from "react";
import axios from "axios";

export const Github = () => {
  const [repos, setRepos] = React.useState([]);
  React.useEffect(() => {
    const getRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/adamclark-12/repos?page=1&per_page=6&sort=updated`
        );
        setRepos(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }; /*Using the user name your github get all your repos */
    getRepos();
  }, []);

  return (
    <section className="github" id="#github">
      <h1 className="section__title section__title--github">Github</h1>
      <p className="section__subtitle section__subtitle--github">
        Here is some of my current work from github
      </p>
      <h3>Current GitHub repos</h3>
      <section class="grid-even-col">
        {repos.map((repo) => (
          <div className="card" key={repo.id}>
            <a href={repo.html}></a>
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};
