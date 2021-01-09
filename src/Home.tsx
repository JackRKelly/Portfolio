//dependencies
import React, { FC, FormEvent, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSpring } from "react-spring/web";
//svg
import EmailIcon from "./assets/svg/EmailIcon";
import DownloadIcon from "./assets/svg/DownloadIcon";
import AboutShapes from "./assets/svg/AboutShapes";
import DownArrow from "./assets/svg/DownArrow";
import HeroShapes from "./assets/svg/HeroShapes";
import ScrollToTop from "./assets/svg/ScrollToTop";
import JRKLogoStroke from "./assets/svg/JRKLogoStroke";
import LinkedIn from "./assets/svg/LinkedIn";
//components
import ArticleCard from "./components/ArticleCard";
import ContactOption from "./components/ContactOption";
import ContactOptionsWrapper from "./components/ContactOptionsWrapper";
import ArticleWrapper from "./components/ArticleWrapper";
import Content from "./components/Content";
import WorkCard from "./components/WorkCard";
import WorkWrapper from "./components/WorkWrapper";
import PrimaryModal from "./components/PrimaryModal";
import SecondaryModal from "./components/SecondaryModal";
//methods
import { debounce } from "ts-debounce";
import { isInViewport } from "./assets/util";
import { encode } from "./assets/util";
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
import FullStackThumbnail from "./assets/images/articles/full-stack.jpg";
import NetworkingThumbnail from "./assets/images/articles/networking.jpg";
//styles
import "./Home.scss";
//types
import { ModalDetails } from "./util";

interface Props {
  isMobile: boolean;
  setActiveRef: React.Dispatch<React.SetStateAction<number>>;
  activeRef: number;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
  setIsTop: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: FC<Props> = (props: Props) => {
  const {
    isMobile,
    setActiveRef,
    activeRef,
    viewport,
    onModalClose,
    onModalOpen,
    setIsTop,
  } = props;

  //Form state
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalDetails | undefined>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [imageModalList, setImageModalList] = useState<Array<string>>([]);

  //Section Refs
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

    setIsTop(window.scrollY < 10);

    if (document.body.style.position !== "fixed") {
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
          document.title = "Articles | Jack Kelly";
        }
      }
      if (contactRef.current) {
        if (isInViewport(contactRef.current)) {
          setActiveRef(4);
          document.title = "Contact | Jack Kelly";
        }
      }
    }
  };

  const scrollRefCheck = debounce(() => {
    checkCurrentRef();
  }, 50);

  const setParallaxDebounce = debounce((x: number, y: number) => {
    setParallax({ xy: calc(x, y) });
  }, 20);

  window.addEventListener("scroll", scrollRefCheck);

  const [parallax, setParallax] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 20, tension: 200, friction: 250 },
  }));

  return (
    <>
      {modalInfo ? (
        <PrimaryModal
          isModalOpen={isModalOpen}
          modalInfo={modalInfo}
          onModalClose={onModalClose}
          setIsModalOpen={setIsModalOpen}
          checkCurrentRef={checkCurrentRef}
          viewport={viewport}
          setIsImageModalOpen={setIsImageModalOpen}
          setImageModalList={setImageModalList}
        />
      ) : (
        <></>
      )}

      {imageModalList ? (
        <SecondaryModal
          setIsImageModalOpen={setIsImageModalOpen}
          isImageModalOpen={isImageModalOpen}
          imageModalList={imageModalList}
        />
      ) : (
        <></>
      )}

      {isMobile ? (
        <> </>
      ) : (
        <AnchorLink offset="0" href="#main">
          <div
            className="back-to-top"
            style={{
              opacity: activeRef !== 0 ? 1 : 0,
              pointerEvents: activeRef !== 0 ? "auto" : "none",
            }}
          >
            <ScrollToTop />
          </div>
        </AnchorLink>
      )}

      <main
        id="main"
        onMouseMove={({ clientX: x, clientY: y }) => {
          if (parallaxRef.current) {
            if (isInViewport(parallaxRef.current)) {
              setParallaxDebounce(x, y);
            }
          }
        }}
      >
        <section id="home" ref={homeRef}>
          <Content>
            <div className="info">
              <h1>Jack Kelly</h1>
              <p>
                I'm a self-taught software engineer based in Kansas who enjoys
                designing and building websites, writing software, and
                everything in between.
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
              I'm a self-taught software engineer who is currently working at
              Cerner. In my free time, I enjoy contributing to open-source,
              designing, and working on side projects. Some technologies I enjoy
              are Typescript, Rust, Docker, React.js, and Node.js. I have been
              writing code for 5 years since I first got introduced to web
              development.
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
                github={"https://github.com/JackRKelly/FridgeMan"}
                preview={"https://vimeo.com/412508762"}
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
                setIsModalOpen={setIsModalOpen}
                setIsImageModalOpen={setIsImageModalOpen}
                setImageModalList={setImageModalList}
                setModalInfo={setModalInfo}
              />
              <WorkCard
                description={
                  "J2 Business Site is a mock business site built to showcase Jack Kelly’s work. There is a contact page utilizing Netlify Forms to handle form submission. This website was awarded 2nd place in the 2019 eMagine Media festival. This site was built using HTML, CSS, JavaScript, Netlify, and Fullpage.js."
                }
                title={"J2 Business Site"}
                primaryColor={"#F600FF"}
                tags={["Front-End", "Fullpage.js"]}
                github={"https://github.com/JackRKelly/J2"}
                live={"https://j2.netlify.com/"}
                viewport={viewport}
                onModalClose={onModalClose}
                onModalOpen={onModalOpen}
                thumbnail={J21}
                images={[J21, J22, J28, J24, J25, J26, J27, J23]}
                checkCurrentRef={checkCurrentRef}
                setIsModalOpen={setIsModalOpen}
                setIsImageModalOpen={setIsImageModalOpen}
                setImageModalList={setImageModalList}
                setModalInfo={setModalInfo}
              />
              <WorkCard
                description={
                  "Jack’s Peppers is an full stack e-commerce site that is built to allow Jack to sell his many varieties of home grown peppers with ease. This site supports advanced search queries by color, price, and heat. Jack’s Peppers has a home, cart, contact, and search page. This e-commerce site was built using React.js, Express.js, Node.js, SCSS, Stripe.js, MongoDB, Mongoose, and Typescript."
                }
                title={"Jacks Peppers"}
                primaryColor={"#C1272D"}
                tags={["Full-Stack", "React.js"]}
                github={"https://github.com/JackRKelly/JacksPeppers"}
                preview={"https://vimeo.com/451655410"}
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
                setIsModalOpen={setIsModalOpen}
                setIsImageModalOpen={setIsImageModalOpen}
                setImageModalList={setImageModalList}
                setModalInfo={setModalInfo}
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
                image={FullStackThumbnail}
                tags={["Tutorial", "Cloud Hosting"]}
                link={
                  "https://dev.to/jackrkelly/create-a-full-stack-web-application-using-react-strapi-nginx-mongodb-and-digitalocean-bkh"
                }
              />
              <ArticleCard
                description={
                  "Learn about the importance of networking, and how to network successfully as a Software Engineer."
                }
                title={"The importance of networking"}
                image={NetworkingThumbnail}
                tags={["Career", "Beginners"]}
                link={
                  "https://dev.to/jackrkelly/the-importance-of-networking-2o7o"
                }
              />
              <ArticleCard
                description={
                  "How to create and publish a full stack application using React.js, Nginx, Strapi, MongoDB, and DigitalOcean."
                }
                title={"Create a Full-Stack App"}
                image={FullStackThumbnail}
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
                      alert("Message Received!");
                      setEmail("");
                      setFullname("");
                      setMessage("");
                    })
                    .catch((error) => alert(error));

                  e.preventDefault();
                }}
              >
                <ContactOptionsWrapper>
                  <ContactOption
                    string="me@jrk.digital"
                    href="mailto:me@jrk.digital"
                  >
                    <EmailIcon />
                  </ContactOption>
                  <ContactOption
                    string="Jack Kelly"
                    href="https://www.linkedin.com/in/jackkelly4/"
                  >
                    <LinkedIn />
                  </ContactOption>

                  <ContactOption
                    string="Résumé"
                    href="/pdf/jack-kelly-resume.pdf"
                  >
                    <DownloadIcon />
                  </ContactOption>
                </ContactOptionsWrapper>
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
                  placeholder="Email"
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
            <div className="logo-wrapper">
              <div className="jrk-logo">
                <AnchorLink offset="0" href="#main">
                  <JRKLogoStroke />
                </AnchorLink>
              </div>
            </div>
          </Content>
        </footer>
      </main>
    </>
  );
};

export default Home;
