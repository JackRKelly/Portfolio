import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <section id="home">
        <div className="info">
          <h1>Jack Kelly</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            velit vestibulum, auctor lorem a, tincidunt nisl.
          </p>
          <a href="#work">View My Work</a>
        </div>
      </section>
      <section id="about">
        <h1>About</h1>
      </section>
      <section id="work">
        <h1>Work</h1>
      </section>
      <section id="articles">
        <h1>Articles</h1>
      </section>
      <section id="contact">
        <h1>Contact</h1>
      </section>
    </main>
  );
};

export default Home;
