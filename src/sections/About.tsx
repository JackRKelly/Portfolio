import React from "react";
import { AboutShapes } from "../assets/svg";
import { Content } from "../components/Content";
import { Element } from "react-scroll";
import { ExternalLink } from "../components/ExternalLink";

interface Props {
  isMobile: boolean;
  aboutRef: React.MutableRefObject<null>;
}

export function About(props: Props) {
  const { isMobile, aboutRef } = props;

  return (
    <Element name="home">
      <section id="about" ref={aboutRef}>
        <Content>
          {isMobile ? null : <AboutShapes />}
          <h1>About</h1>
          <p>
            working at I&apos;m a self-taught software engineer who is currently working at{" "}
            <ExternalLink text={"AMC Theatres"} link={"https://www.amctheatres.com/"} /> as a Software Enginer II. In my
            free time, I enjoy contributing to open-source, designing, and working on side projects. Some technologies I
            enjoy are Typescript, Golang, and Rust. I have been writing code for 5 years since I first got introduced to
            web development.
          </p>
        </Content>
      </section>
    </Element>
  );
}
