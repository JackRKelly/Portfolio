//dependencies
import React, { FC, FormEvent, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
//svg
import AboutShapes from "./assets/svg/AboutShapes";
import DownArrow from "./assets/svg/DownArrow";
import HeroShapes from "./assets/svg/HeroShapes";
import ScrollToTop from "./assets/svg/ScrollToTop";
//components
import ArticleCard from "./components/ArticleCard";
import ArticleWrapper from "./components/ArticleWrapper";
import Content from "./components/Content";
import WorkCard from "./components/WorkCard";
import WorkWrapper from "./components/WorkWrapper";
//methods
import { debounce } from "ts-debounce";
import { isInViewport } from "./assets/util";
import { encode } from "./assets/util";
//images
//FridgeMan
import FridgeMan1 from "./assets/images/fridgeman/Screenshot_1.png";
import FridgeMan2 from "./assets/images/fridgeman/Screenshot_2.png";
import FridgeMan3 from "./assets/images/fridgeman/Screenshot_3.png";
import FridgeMan4 from "./assets/images/fridgeman/Screenshot_4.png";
import FridgeMan5 from "./assets/images/fridgeman/Screenshot_5.png";
import FridgeMan6 from "./assets/images/fridgeman/Screenshot_6.png";
import FridgeMan7 from "./assets/images/fridgeman/Screenshot_7.png";
//J2
import J21 from "./assets/images/j2/Screenshot_1.png";
import J22 from "./assets/images/j2/Screenshot_2.png";
import J23 from "./assets/images/j2/Screenshot_3.png";
import J24 from "./assets/images/j2/Screenshot_4.png";
import J25 from "./assets/images/j2/Screenshot_5.png";
import J26 from "./assets/images/j2/Screenshot_6.png";
import J27 from "./assets/images/j2/Screenshot_7.png";
import J28 from "./assets/images/j2/Screenshot_8.png";
//Jacks Peppers
import JacksPeppers1 from "./assets/images/jackspeppers/Screenshot_1.png";
import JacksPeppers2 from "./assets/images/jackspeppers/Screenshot_2.png";
import JacksPeppers3 from "./assets/images/jackspeppers/Screenshot_3.png";
import JacksPeppers4 from "./assets/images/jackspeppers/Screenshot_4.png";
import JacksPeppers5 from "./assets/images/jackspeppers/Screenshot_5.png";
import JacksPeppers6 from "./assets/images/jackspeppers/Screenshot_6.png";
//articles
import ArticleThumb from "./assets/images/articlethumb.jpg";
//styles
import "./Home.scss";

interface Props {
  isMobile: boolean;
  setActiveRef: React.Dispatch<React.SetStateAction<number>>;
  activeRef: number;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
}

const Home: FC<Props> = (props: Props) => {
  const {
    isMobile,
    setActiveRef,
    activeRef,
    viewport,
    onModalClose,
    onModalOpen,
  } = props;

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

  const checkCurrentRef = () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
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
  }, 50);

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
                  "Fridge Man was built to make food inventory management a breeze. Fridge Man allows you to create and edit locations in which food will be stored. You can also add food items and their expiration dates to the locations you created. This application has user authentication supporting signing up and logging in. Fridge Man is a full-stack application built using React.js, SCSS, Node.js, Express.js, and PostgreSQL."
                }
                primaryColor={"#7353ff"}
                title={"Fridge Man"}
                tags={["Full-Stack", "React.js"]}
                viewport={viewport}
                onModalClose={onModalClose}
                onModalOpen={onModalOpen}
                thumbnail={FridgeMan6}
                images={[
                  FridgeMan6,
                  FridgeMan2,
                  FridgeMan4,
                  FridgeMan1,
                  FridgeMan7,
                  FridgeMan3,
                  FridgeMan5,
                ]}
                checkCurrentRef={checkCurrentRef}
              />
              <WorkCard
                description={
                  "J2 Business Site is a mock business site built to showcase Jack Kelly’s work. There is a contact page utilizing Netlify Forms to handle form submission. This website was awarded 2nd place in the 2019 eMagine Media festival. This site was built using HTML, CSS, JavaScript, Netlify, and Fullpage.js."
                }
                title={"J2 Business Site"}
                primaryColor={"#3D00FF"}
                tags={["Javascript", "Fullpage.js"]}
                viewport={viewport}
                onModalClose={onModalClose}
                onModalOpen={onModalOpen}
                thumbnail={J21}
                images={[J21, J22, J28, J24, J25, J26, J27, J23]}
                checkCurrentRef={checkCurrentRef}
              />
              <WorkCard
                description={
                  "Jack’s Peppers is an full stack e-commerce site that is built to allow Jack to sell his many varieties of home grown peppers with ease. This site supports advanced search queries by color, price, and heat. Jack’s Peppers has a home, cart, contact, and search page. This e-commerce site was built using React.js, Express.js, Node.js, SCSS, Stripe.js, MongoDB, Mongoose, and Typescript."
                }
                title={"Jacks Peppers"}
                primaryColor={"#C1272D"}
                tags={["Full-Stack", "React.js"]}
                viewport={viewport}
                onModalClose={onModalClose}
                onModalOpen={onModalOpen}
                thumbnail={JacksPeppers2}
                images={[
                  JacksPeppers1,
                  JacksPeppers2,
                  JacksPeppers3,
                  JacksPeppers5,
                  JacksPeppers4,
                  JacksPeppers6,
                ]}
                checkCurrentRef={checkCurrentRef}
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
                image={ArticleThumb}
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
                image={ArticleThumb}
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
                image={ArticleThumb}
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
                  <li>
                    <a
                      href="/pdf/jack-kelly-resume.pdf"
                      download
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
                            d="M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
                          />
                        </svg>
                      </div>
                      <p>Résumé</p>
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
            <div className="resume-download">
              <a href="/pdf/jack-kelly-resume.pdf" download>
                Download Resume
              </a>
            </div>
          </Content>
        </footer>
      </main>
    </>
  );
};

export default Home;
