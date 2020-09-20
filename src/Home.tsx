import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HeroShapes from "./assets/svg/heroshapes";
import Content from "./components/Content";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <section id="home">
        <Content>
          <div className="info">
            <h1>Jack Kelly</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur blah adipiscing elit.
              Mauris eget velit vestibulum, auctor lorem a, tincidunt nisl blah.
            </p>
            <AnchorLink offset="70" href="#work">
              View My Work
            </AnchorLink>
          </div>
          <div className="hero">
            <HeroShapes />
          </div>
        </Content>
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
