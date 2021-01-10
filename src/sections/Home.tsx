import React, { FC } from "react";
import { DownArrow, HeroShapes } from "../assets/svg";
import Content from "../components/Content";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Home: FC<{ parallax: any; parallaxRef: any }> = ({
  parallax,
  parallaxRef,
}) => {
  return (
    <section id="home">
      <Content>
        <div className="info">
          <h1>Jack Kelly</h1>
          <p>
            I'm a self-taught software engineer based in Kansas who enjoys
            designing and building websites, writing software, and everything in
            between.
          </p>
          <AnchorLink offset="70" href="#work">
            <DownArrow /> View My Work
          </AnchorLink>
        </div>
        <div className="hero">
          <HeroShapes parallax={parallax} ref={parallaxRef} />
        </div>
      </Content>
    </section>
  );
};
