import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import Content from "../components/Content";
import WorkCard from "../components/WorkCard";
import WorkWrapper from "../components/WorkWrapper";
import { ModalDetails } from "../util";
import { images, Image } from "../util/image";

interface Props {
  isMobile: boolean;
  viewport: number;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalDetails | undefined>>;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
}

export const Work: FC<Props> = ({
  isMobile,
  viewport,
  setIsModalOpen,
  setModalInfo,
  setIsImageModalOpen,
  setImageModalList,
}) => {
  return (
    <section id="work">
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
            github={"https://github.com/JackRKelly/FridgeMan"}
            preview={"https://vimeo.com/412508762"}
            thumbnail={images.fridgeman[0]}
            images={images.fridgeman}
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
            thumbnail={images.jacksquared[0]}
            images={images.jacksquared}
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
            thumbnail={images.jackspeppers[0]}
            images={images.jackspeppers}
            setIsModalOpen={setIsModalOpen}
            setIsImageModalOpen={setIsImageModalOpen}
            setImageModalList={setImageModalList}
            setModalInfo={setModalInfo}
          />
        </WorkWrapper>
      </Content>
    </section>
  );
};
