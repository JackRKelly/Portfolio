import React, { FC, useEffect, useRef, useState } from "react";
import { DownArrow, HeroShapes } from "../assets/svg";
import Content from "../components/Content";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { debounce } from "ts-debounce";
import { isInViewport, calc } from "../util";
import { useSpring } from "react-spring/web";

interface Props {
  homeRef: React.MutableRefObject<null>;
}

export const Home: FC<Props> = ({ homeRef }) => {
  const [isHeroVisible, setIsHeroVisible] = useState<boolean>(false);
  const parallaxRef = useRef(null);

  const [parallax, setParallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 200, friction: 250 },
  }));

  const checkIsHeroVisible = (hero: React.MutableRefObject<null>): void => {
    setIsHeroVisible(isInViewport(hero.current));
  };

  const checkIsHeroVisibleDebounced = debounce(
    (hero: React.MutableRefObject<null>) => {
      checkIsHeroVisible(hero);
    },
    500
  );

  useEffect(() => {
    checkIsHeroVisible(parallaxRef);
  }, []);

  return (
    <section
      id="home"
      ref={homeRef}
      onMouseMove={({ clientX: x, clientY: y }) => {
        if (parallaxRef.current) {
          checkIsHeroVisibleDebounced(parallaxRef);
          if (isHeroVisible) {
            setParallax({ xy: calc(x, y) });
          }
        }
      }}
    >
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
