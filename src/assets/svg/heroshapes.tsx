import React from "react";
import "./heroshapes.scss";
import JRKHero from "../images/jrkhero.png";
import { animated } from "react-spring";

const HeroShapes = (props) => {
  const { parallax } = props;

  const trans1 = (x: number, y: number) =>
    `translate3d(${x / 6}px,${y / 6}px,0)`;
  const trans2 = (x: number, y: number) =>
    `translate3d(${x / 8}px,${y / 8}px,0)`;
  const trans3 = (x: number, y: number) =>
    `translate3d(${x / 10}px,${y / 10}px,0)`;
  const trans4 = (x: number, y: number) =>
    `translate3d(${x / 12}px,${y / 12}px,0)`;
  const trans5 = (x: number, y: number) =>
    `translate3d(${x / 14}px,${y / 14}px,0) translateX(-50%)`;

  return (
    <>
      <animated.img
        className="hero-image"
        src={JRKHero}
        alt=""
        style={{ transform: parallax.xy.interpolate(trans5) }}
      />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 930.28 725.01"
      >
        <animated.g
          id="Polygon_4"
          data-name="Polygon 4"
          style={{ transform: parallax.xy.interpolate(trans3) }}
        >
          <path
            className="hero-cls-2"
            d="M763.12,291.61l26.45,121.94,92-82.82L763.12,291.61m-6.74-7.5,135,44.57L786.51,423Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-3"
            d="M739.5,270.11,766,392.05l92-82.82L739.5,270.11m-6.75-7.49,135,44.57L762.89,401.54Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
        <animated.g
          id="Group_186"
          data-name="Group 186"
          style={{ transform: parallax.xy.interpolate(trans4) }}
        >
          <g id="Ellipse_6" data-name="Ellipse 6">
            <circle className="hero-cls-1" cx="498.23" cy="419.19" r="242.03" />
            <circle className="hero-cls-4" cx="498.23" cy="419.19" r="238.03" />
          </g>
          <g id="Ellipse_1" data-name="Ellipse 1">
            <circle className="hero-cls-1" cx="485.98" cy="383.8" r="242.03" />
            <circle className="hero-cls-5" cx="485.98" cy="383.8" r="238.03" />
          </g>
        </animated.g>
        <animated.g
          id="Group_191"
          data-name="Group 191"
          style={{ transform: parallax.xy.interpolate(trans2) }}
        >
          <rect
            className="hero-cls-6"
            x="729.02"
            y="126.73"
            width="86.01"
            height="86.01"
            transform="translate(105.42 526.52) rotate(-44.99)"
          />
          <rect
            className="hero-cls-7"
            x="700.87"
            y="127.47"
            width="86.01"
            height="86.01"
            transform="translate(96.65 506.83) rotate(-44.99)"
          />
        </animated.g>
        <animated.g
          id="Group_194"
          data-name="Group 194"
          style={{ transform: parallax.xy.interpolate(trans1) }}
        >
          <g id="Ellipse_5" data-name="Ellipse 5">
            <circle className="hero-cls-1" cx="888.77" cy="57.44" r="41.5" />
            <circle className="hero-cls-8" cx="888.77" cy="57.44" r="39" />
          </g>
          <g id="Ellipse_3" data-name="Ellipse 3">
            <circle className="hero-cls-1" cx="879.58" cy="41.52" r="41.5" />
            <circle className="hero-cls-9" cx="879.58" cy="41.52" r="39" />
          </g>
        </animated.g>
        <animated.g
          id="Group_190"
          data-name="Group 190"
          style={{ transform: parallax.xy.interpolate(trans3) }}
        >
          <path
            className="hero-cls-11"
            d="M599.87,181.84l-7-18.11L613.08,156,620,174.1l18.79-7.21,7.94,20.67L628,194.77l6.95,18.11-20.16,7.74-7-18.11L589,209.72l-7.93-20.67Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-12"
            d="M605.84,166.69l-7-18.11L619,140.84,626,159l18.79-7.21,7.93,20.67-18.79,7.22,7,18.11-20.16,7.73-7-18.1L595,194.58,587,173.91Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
        <animated.g
          id="Group_189"
          data-name="Group 189"
          style={{ transform: parallax.xy.interpolate(trans2) }}
        >
          <path
            className="hero-cls-2"
            d="M897.52,242.71a40.69,40.69,0,0,0-14.31-52.77l-36.79,72.2a40.56,40.56,0,0,0,27.41.8,40.49,40.49,0,0,0,23.69-20.23m3.56,1.82A44.67,44.67,0,0,1,841,264.06l40.6-79.67a44.68,44.68,0,0,1,19.53,60.14Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-3"
            d="M880.61,241.83a40.66,40.66,0,0,0-14.32-52.76l-36.78,72.2a40.19,40.19,0,0,0,11.91,2.7,40.66,40.66,0,0,0,39.19-22.14m3.56,1.82A44.67,44.67,0,0,1,824,263.19l40.59-79.67a44.67,44.67,0,0,1,19.54,60.13Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
        <animated.g
          id="Polygon_4-2"
          data-name="Polygon 4-2"
          style={{ transform: parallax.xy.interpolate(trans3) }}
        >
          <path
            className="hero-cls-2"
            d="M205.73,569.64,175,448.72,86,534.7l119.77,34.94m7,7.25L76.29,537.09l101.46-98Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-3"
            d="M224.37,590.14,193.66,469.22l-89.06,86,119.77,34.94m7,7.25L94.92,557.59l101.47-98Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
        <animated.g
          id="Group_193"
          data-name="Group 193"
          style={{ transform: parallax.xy.interpolate(trans2) }}
        >
          <rect
            className="hero-cls-13"
            x="138.79"
            y="689.48"
            width="86"
            height="86"
            transform="translate(-323.16 102.04) rotate(-27.99)"
          />
          <rect
            className="hero-cls-14"
            x="146.32"
            y="662.34"
            width="86"
            height="86"
            transform="translate(-309.54 102.39) rotate(-27.99)"
          />
        </animated.g>
        <animated.g
          id="Group_196"
          data-name="Group 196"
          style={{ transform: parallax.xy.interpolate(trans1) }}
        >
          <circle className="hero-cls-15" cx="41.53" cy="660.06" r="39.02" />
          <circle className="hero-cls-16" cx="48.12" cy="677.24" r="39.02" />
        </animated.g>
        <animated.g
          id="Group_195"
          data-name="Group 195"
          style={{ transform: parallax.xy.interpolate(trans2) }}
        >
          <path
            className="hero-cls-11"
            d="M64.68,640.15l-8.2-17.58,19.57-9.13L84.25,631l18.24-8.51,9.36,20.07-18.24,8.51,8.19,17.58L82.23,677.8,74,660.21l-18.25,8.51-9.36-20.07Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-12"
            d="M69.58,624.62,61.38,607,81,597.92l8.2,17.58L107.39,607l9.36,20.07-18.25,8.5,8.2,17.59-19.57,9.12-8.2-17.58L60.69,653.2l-9.36-20.07Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
        <animated.g
          id="Group_188"
          data-name="Group 188"
          style={{ transform: parallax.xy.interpolate(trans3) }}
        >
          <path
            className="hero-cls-2"
            d="M319,712.22a40.71,40.71,0,0,0-33.53,43.19l79.81-14.07A40.61,40.61,0,0,0,349.42,719,40.57,40.57,0,0,0,319,712.22m-.69-3.94a44.68,44.68,0,0,1,51.79,36.28L282,760.07a44.67,44.67,0,0,1,36.27-51.79Z"
            transform="translate(-0.61 -69)"
          />
          <path
            className="hero-cls-3"
            d="M328.48,726.26a40.73,40.73,0,0,0-32.62,31,39.94,39.94,0,0,0-.91,12.18l79.81-14.06a40.27,40.27,0,0,0-5-11.15,40.82,40.82,0,0,0-25.1-17.57,40.33,40.33,0,0,0-16.16-.4m-.69-3.94a44.67,44.67,0,0,1,51.79,36.27l-88.06,15.52a44.67,44.67,0,0,1,36.27-51.79Z"
            transform="translate(-0.61 -69)"
          />
        </animated.g>
      </svg>
    </>
  );
};

export default HeroShapes;
