import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
import AboutShapes from "./assets/svg/aboutshapes";
import DownArrow from "./assets/svg/downarrow";
import HeroShapes from "./assets/svg/heroshapes";
import Content from "./components/Content";
import WorkCard from "./components/WorkCard";
import WorkWrapper from "./components/WorkWrapper";
import "./Home.scss";

interface Props {
  isMobile: boolean;
}

const Home = (props: Props) => {
  const { isMobile } = props;

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
          {isMobile ? <></> : <AboutShapes parallax={parallax} />}

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
        <Content>
          <h1>Work</h1>
          <WorkWrapper>
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Project Name"}
              tags={["Command", "Rust"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat. Vivamus placerat dapibus velit non eleifend. Sed molestie"
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
          </WorkWrapper>
        </Content>
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
