//dependencies
import React, { FC, useEffect, useRef, useState } from "react";
//components
import PrimaryModal from "./components/PrimaryModal";
import SecondaryModal from "./components/SecondaryModal";
//methods
import { isInViewport } from "./util";
//styles
import "./Main.scss";
//util
import { ModalDetails } from "./util";
import { Image } from "./util/image";
//sections
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Articles } from "./sections/Articles";
import { Contact } from "./sections/Contact";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./sections/Footer";
import { debounce } from "ts-debounce";

interface Props {
  isMobile: boolean;
  setActiveRef: React.Dispatch<React.SetStateAction<number>>;
  activeRef: number;
  viewport: number;
  setIsTop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main: FC<Props> = ({
  isMobile,
  viewport,
  setIsTop,
  activeRef,
  setActiveRef,
}) => {
  //Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalDetails | undefined>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [imageModalList, setImageModalList] = useState<Image[]>([]);

  //Section Refs
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const articleRef = useRef(null);
  const contactRef = useRef(null);

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

  const scrollPositionCheck = debounce(() => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
    checkCurrentRef();
  }, 50);

  useEffect(() => {
    window.addEventListener("scroll", scrollPositionCheck);
    return () => {
      window.removeEventListener("scroll", scrollPositionCheck);
    };
  }, [scrollPositionCheck]);

  return (
    <>
      <PrimaryModal
        isModalOpen={isModalOpen}
        modalInfo={modalInfo}
        setIsModalOpen={setIsModalOpen}
        viewport={viewport}
        setIsImageModalOpen={setIsImageModalOpen}
        setImageModalList={setImageModalList}
      />

      <SecondaryModal
        setIsImageModalOpen={setIsImageModalOpen}
        isImageModalOpen={isImageModalOpen}
        imageModalList={imageModalList}
      />

      <BackToTop isMobile={isMobile} activeRef={activeRef} />

      <main id="main">
        <Home homeRef={homeRef} />
        <About isMobile={isMobile} aboutRef={aboutRef} />
        <Work
          isMobile={isMobile}
          viewport={viewport}
          setIsModalOpen={setIsModalOpen}
          setModalInfo={setModalInfo}
          setIsImageModalOpen={setIsImageModalOpen}
          setImageModalList={setImageModalList}
          workRef={workRef}
        />
        <Articles isMobile={isMobile} articleRef={articleRef} />
        <Contact isMobile={isMobile} contactRef={contactRef} />
        <Footer />
      </main>
    </>
  );
};
