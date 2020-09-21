import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
import DownArrow from "./assets/svg/downarrow";
import HeroShapes from "./assets/svg/heroshapes";
import Content from "./components/Content";
import "./Home.scss";

const Home = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const [parallax, setParallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 250, friction: 250 },
  }));

  return (
    <main
      onMouseMove={({ clientX: x, clientY: y }) =>
        setParallax({ xy: calc(x, y) })
      }
    >
      <section id="home">
        <Content>
          <div className="info">
            <h1>Jack Kelly</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur blah adipiscing elit.
              Mauris eget velit vestibulum, auctor lorem a, tincidunt nisl blah.
            </p>
            <AnchorLink offset="70" href="#work">
              <DownArrow /> View My Work
            </AnchorLink>
          </div>
          <div className="hero">
            <HeroShapes parallax={parallax} />
          </div>
        </Content>
      </section>
      <section id="about">
        <Content>
          <h1>About</h1>
          <p>
            I'm a self-taught software engineer who is currently a intern at
            cerner corperation. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat,
            a facilisis leo finibus a. Proin dignissim interdum augue ut
            consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie
            viverrasce turpis nisl, venenatis id malesuada et, laoreet at lacus.
          </p>
        </Content>
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
