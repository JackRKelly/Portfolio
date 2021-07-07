import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import Content from "../components/Content";

interface Props {
  isMobile: boolean;
  aboutRef: React.MutableRefObject<null>;
}

export const About: FC<Props> = ({ isMobile, aboutRef }) => {
  return (
    <section id="about" ref={aboutRef}>
      <Content>
        {isMobile ? <></> : <AboutShapes />}
        <h1>About</h1>
        <p>
          I'm a self-taught software engineer who is currently looking for work.
          In my free time, I enjoy contributing to open-source, designing, and
          working on side projects. Some technologies I enjoy are Typescript,
          Rust, C#, and Ruby. I have been writing code for 5 years since I first
          got introduced to web development.
        </p>
      </Content>
    </section>
  );
};
