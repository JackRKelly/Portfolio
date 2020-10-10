import React, { FC, FormEvent, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
import { debounce } from "ts-debounce";
import AboutShapes from "./assets/svg/AboutShapes";
import DownArrow from "./assets/svg/DownArrow";
import HeroShapes from "./assets/svg/HeroShapes";
import ScrollToTop from "./assets/svg/ScrollToTop";
import ArticleCard from "./components/ArticleCard";
import ArticleWrapper from "./components/ArticleWrapper";
import Content from "./components/Content";
import WorkCard from "./components/WorkCard";
import WorkWrapper from "./components/WorkWrapper";
import PlaceholderImage1 from "./assets/images/placeholder.png";
import PlaceholderImage2 from "./assets/images/placeholder2.png";
import PlaceholderImage3 from "./assets/images/placeholder3.jpg";
import "./Home.scss";

interface Props {
  isMobile: boolean;
  setActiveRef: React.Dispatch<React.SetStateAction<number>>;
  activeRef: number;
}

const Home: FC<Props> = (props: Props) => {
  const { isMobile, setActiveRef, activeRef } = props;

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const articleRef = useRef(null);
  const contactRef = useRef(null);
  const parallaxRef = useRef(null);

  const calc = (x: number, y: number) => [
    x - window.innerWidth / 2,
    y - window.innerHeight / 2,
  ];

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const isInViewport = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) + 400 &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const checkCurrentRef = () => {
    if (homeRef.current) {
      if (isInViewport(homeRef.current)) {
        setActiveRef(0);
        document.title = "Home | Jack Kelly";
      }
    }
    if (aboutRef.current) {
      if (isInViewport(aboutRef.current)) {
        setActiveRef(1);
        document.title = "About | Jack Kelly";
      }
    }
    if (workRef.current) {
      if (isInViewport(workRef.current)) {
        setActiveRef(2);
        document.title = "Work | Jack Kelly";
      }
    }
    if (articleRef.current) {
      if (isInViewport(articleRef.current)) {
        setActiveRef(3);
        document.title = "Article | Jack Kelly";
      }
    }
    if (contactRef.current) {
      if (isInViewport(contactRef.current)) {
        setActiveRef(4);
        document.title = "Contact | Jack Kelly";
      }
    }
  };

  const scrollRefCheck = debounce(() => {
    checkCurrentRef();
  }, 100);

  window.addEventListener("scroll", scrollRefCheck);

  const [parallax, setParallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 200, friction: 250 },
  }));

  return (
    <>
      {isMobile ? (
        <> </>
      ) : (
        <div
          className="back-to-top"
          style={{
            opacity: activeRef !== 0 ? 1 : 0,
            pointerEvents: activeRef !== 0 ? "auto" : "none",
          }}
        >
          <AnchorLink offset="0" href="#home">
            <ScrollToTop />
          </AnchorLink>
        </div>
      )}

      <main
        onMouseMove={({ clientX: x, clientY: y }) => {
          if (parallaxRef.current) {
            if (isInViewport(parallaxRef.current)) {
              setParallax({ xy: calc(x, y) });
            }
          }
        }}
      >
        <section id="home" ref={homeRef}>
          <Content>
            <div className="info">
              <h1>Jack Kelly</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur blah adipiscing elit.
                Mauris eget velit vestibulum, auctor lorem a, tincidunt nisl
                blah.
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
        <section id="about" ref={aboutRef}>
          <Content>
            {isMobile ? <></> : <AboutShapes />}
            <h1>About</h1>
            <p>
              I'm a self-taught software engineer who is currently a intern at
              cerner corperation. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor
              erat, a facilisis leo finibus a. Proin dignissim interdum augue ut
              consequat. Vivamus placerat dapibus velit non eleifend. Sed
              molestie viverrasce turpis nisl, venenatis id malesuada et,
              laoreet at lacus.
            </p>
          </Content>
        </section>
        <section id="work" ref={workRef}>
          <Content>
            {isMobile ? <></> : <AboutShapes />}
            <h1>Work</h1>
            <WorkWrapper>
              <WorkCard
                description={
                  "Fridge Man is a full-stack application built using React.js, Node.js, Express.js, and PostgreSQL. Fridge Man was built to make food inventory management a breeze. Fridge Man allows you to create and edit locations in which food will be stored. You can also add food items and their expiration dates to the locations you created. This application has user authentication supporting signing up and logging in."
                }
                title={"Fridge Man"}
                tags={["Full-Stack", "React.js"]}
                images={[
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                ]}
                checkCurrentRef={checkCurrentRef}
              />
              <WorkCard
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat."
                }
                title={"Project Name"}
                tags={["Command", "Rust"]}
                checkCurrentRef={checkCurrentRef}
                images={[
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                ]}
              />
              <WorkCard
                description={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae ex mi. Aliquam euismod tortor erat, a facilisis leo finibus a. Proin dignissim interdum augue ut consequat."
                }
                title={"Website Name"}
                tags={["Website", "React.js"]}
                checkCurrentRef={checkCurrentRef}
                images={[
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                  PlaceholderImage1,
                  PlaceholderImage2,
                  PlaceholderImage3,
                ]}
              />
            </WorkWrapper>
          </Content>
        </section>
        <section id="articles" ref={articleRef}>
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
        <section id="contact" ref={contactRef}>
          <Content>
            {isMobile ? <></> : <AboutShapes />}
            <h1>Contact</h1>
            <div className="form-wrapper">
              <form
                id="contactForm"
                className="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  console.log("submit2");
                  e.preventDefault();

                  let formData = {
                    fullname: fullname,
                    email: email,
                    message: message,
                  };

                  fetch("/form", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: encode({ "form-name": "contact", ...formData }),
                  })
                    .then(() => {
                      alert("Success!");
                      setEmail("");
                      setFullname("");
                      setMessage("");
                    })
                    .catch((error) => alert(error));

                  e.preventDefault();
                }}
              >
                <ul className="contact-options">
                  <li>
                    <a
                      href="mailto:kcjackkelly@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="submit-button"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
                          />
                        </svg>
                      </div>
                      <p>kcjackkelly@gmail.com</p>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/JackRKelly"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="submit-button"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                          />
                        </svg>
                      </div>
                      <p>JackRKelly</p>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.linkedin.com/in/jackkelly4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="submit-button"
                    >
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="#fff"
                            d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                          />
                        </svg>
                      </div>
                      <p>Jack Kelly</p>
                    </a>
                  </li>
                </ul>
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Full Name"
                  value={fullname}
                  onChange={(e) => {
                    setFullname(e.target.value);
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
                </button>
              </form>
            </div>
          </Content>
        </section>
        <footer id="footer">
          <Content>
            <div className="jrk-logo">
              <p>Download resume</p>
            </div>
          </Content>
        </footer>
      </main>
    </>
  );
};

export default Home;
