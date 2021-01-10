import React, { FC } from "react";
import { AboutShapes } from "../assets/svg";
import Content from "../components/Content";
import WorkCard from "../components/WorkCard";
import WorkWrapper from "../components/WorkWrapper";
import { ModalDetails } from "../util";

//FridgeMan
import FridgeMan1 from "../assets/images/fridgeman/Screenshot_1.png";
import FridgeMan2 from "../assets/images/fridgeman/Screenshot_2.png";
import FridgeMan3 from "../assets/images/fridgeman/Screenshot_3.png";
import FridgeMan4 from "../assets/images/fridgeman/Screenshot_4.png";
import FridgeMan5 from "../assets/images/fridgeman/Screenshot_5.png";
import FridgeMan6 from "../assets/images/fridgeman/Screenshot_6.png";
import FridgeMan7 from "../assets/images/fridgeman/Screenshot_7.png";
//J2
import J21 from "../assets/images/j2/Screenshot_1.png";
import J22 from "../assets/images/j2/Screenshot_2.png";
import J23 from "../assets/images/j2/Screenshot_3.png";
import J24 from "../assets/images/j2/Screenshot_4.png";
import J25 from "../assets/images/j2/Screenshot_5.png";
import J26 from "../assets/images/j2/Screenshot_6.png";
import J27 from "../assets/images/j2/Screenshot_7.png";
import J28 from "../assets/images/j2/Screenshot_8.png";
//Jacks Peppers
import JacksPeppers1 from "../assets/images/jackspeppers/Screenshot_1.png";
import JacksPeppers2 from "../assets/images/jackspeppers/Screenshot_2.png";
import JacksPeppers3 from "../assets/images/jackspeppers/Screenshot_3.png";
import JacksPeppers4 from "../assets/images/jackspeppers/Screenshot_4.png";
import JacksPeppers5 from "../assets/images/jackspeppers/Screenshot_5.png";
import JacksPeppers6 from "../assets/images/jackspeppers/Screenshot_6.png";

interface Props {
  isMobile: boolean;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalDetails | undefined>>;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

export const Work: FC<Props> = ({
  isMobile,
  viewport,
  onModalOpen,
  onModalClose,
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
