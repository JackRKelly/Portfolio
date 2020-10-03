import React, { FC, FormEvent, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
import AboutShapes from "./assets/svg/AboutShapes";
import DownArrow from "./assets/svg/DownArrow";
import HeroShapes from "./assets/svg/HeroShapes";
import ArticleCard from "./components/ArticleCard";
import ArticleWrapper from "./components/ArticleWrapper";
import Content from "./components/Content";
import WorkCard from "./components/WorkCard";
import WorkWrapper from "./components/WorkWrapper";
import "./Home.scss";

interface Props {
  isMobile: boolean;
}

const Home: FC<Props> = (props: Props) => {
  const { isMobile } = props;

  const contactRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const calc = (x: number, y: number) => [
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
          {isMobile ? <></> : <AboutShapes />}
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
          {isMobile ? <></> : <AboutShapes />}
          <h1>Work</h1>
          <WorkWrapper>
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat."
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat."
              }
              title={"Project Name"}
              tags={["Command", "Rust"]}
            />
            <WorkCard
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat."
              }
              title={"Website Name"}
              tags={["Website", "React.js"]}
            />
          </WorkWrapper>
        </Content>
      </section>
      <section id="articles">
        <Content>
          {isMobile ? <></> : <AboutShapes />}
          <h1>Articles</h1>
          <ArticleWrapper>
            <ArticleCard
              description={
                "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
              }
              title={"Create a Full-Stack App"}
              tags={["Tutorial", "Cloud Hosting"]}
              link={
                "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
              }
            />
            <ArticleCard
              description={
                "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
              }
              title={"Create a Full-Stack App"}
              tags={["Tutorial", "Cloud Hosting"]}
              link={
                "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
              }
            />
            <ArticleCard
              description={
                "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
              }
              title={"Create a Full-Stack App"}
              tags={["Tutorial", "Cloud Hosting"]}
              link={
                "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
              }
            />
          </ArticleWrapper>
        </Content>
      </section>
      <section id="contact">
        <Content>
          <h1>Contact</h1>
          <div className="form-wrapper">
            <form
              id="contactForm"
              className="contact"
              method="POST"
              ref={contactRef}
              data-netlify="true"
              onSubmit={(e: FormEvent<HTMLFormElement>) => {
                console.log("submit2");
                e.preventDefault();

                let formData = {
                  fullName: fullName,
                  email: email,
                  message: message,
                };

                let request = contactRef.current?.getAttribute("action");

                if (request) {
                  fetch(request, {
                    method: "POST",
                    headers: {
                      Accept: "application/x-www-form-urlencoded;charset=UTF-8",
                      "Content-Type":
                        "application/x-www-form-urlencoded;charset=UTF-8",
                    },
                    body: new URLSearchParams(formData).toString(),
                  }).then((res) => {
                    if (res) {
                      console.log("success");
                      // document.querySelector(domStrings.talkForm).reset();
                    } else {
                      alert("Error submitting form. Please try again.");
                    }
                  });
                }
              }}
            >
              <input
                type="text"
                name="full-name"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="eMail"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <textarea
                name="message"
                cols={30}
                rows={7}
                placeholder="Reason for reaching out to me"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                <div className="submit">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                    >
                      <path
                        id="plane"
                        d="M44,0,33,40.333,18.1,27.062l14.3-15.1L13.228,25.216,0,22ZM16.5,30.558V44l5.973-8.123Z"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                  <p>Send Message</p>
                </div>
              </button>
            </form>
          </div>
        </Content>
      </section>
    </main>
  );
};

export default Home;
