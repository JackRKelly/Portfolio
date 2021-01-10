//dependencies
import React, { FC, useRef, useState } from "react";
import { useSpring } from "react-spring/web";
//components
import PrimaryModal from "./components/PrimaryModal";
import SecondaryModal from "./components/SecondaryModal";
//methods
import { isInViewport, calc } from "./util";
//styles
import "./Main.scss";
//types
import { ModalDetails } from "./util";
import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Work } from "./sections/Work";
import { Articles } from "./sections/Articles";
import { Contact } from "./sections/Contact";
import { BackToTop } from "./components/BackToTop";
import { Footer } from "./sections/Footer";

interface Props {
  isMobile: boolean;
  setActiveRef: React.Dispatch<React.SetStateAction<number>>;
  activeRef: number;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
  setIsTop: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Main: FC<Props> = (props: Props) => {
  const { isMobile, activeRef, viewport, onModalClose, onModalOpen } = props;

  //Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalInfo, setModalInfo] = useState<ModalDetails | undefined>();
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false);
  const [imageModalList, setImageModalList] = useState<Array<string>>([]);

  //Section Refs
  const parallaxRef = useRef(null);

  // const checkCurrentRef = () => {
  //   document.documentElement.style.setProperty(
  //     "--scroll-y",
  //     `${window.scrollY}px`
  //   );

  //   setIsTop(window.scrollY < 10);

  //   if (document.body.style.position !== "fixed") {
  //     if (homeRef.current) {
  //       if (isInViewport(homeRef.current)) {
  //         setActiveRef(0);
  //         document.title = "Home | Jack Kelly";
  //       }
  //     }
  //     if (aboutRef.current) {
  //       if (isInViewport(aboutRef.current)) {
  //         setActiveRef(1);
  //         document.title = "About | Jack Kelly";
  //       }
  //     }
  //     if (workRef.current) {
  //       if (isInViewport(workRef.current)) {
  //         setActiveRef(2);
  //         document.title = "Work | Jack Kelly";
  //       }
  //     }
  //     if (articleRef.current) {
  //       if (isInViewport(articleRef.current)) {
  //         setActiveRef(3);
  //         document.title = "Articles | Jack Kelly";
  //       }
  //     }
  //     if (contactRef.current) {
  //       if (isInViewport(contactRef.current)) {
  //         setActiveRef(4);
  //         document.title = "Contact | Jack Kelly";
  //       }
  //     }
  //   }
  // };

  // const scrollRefCheck = debounce(() => {
  //   checkCurrentRef();
  // }, 50);

  // window.addEventListener("scroll", scrollRefCheck);

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
          viewport={viewport}
          setIsImageModalOpen={setIsImageModalOpen}
          setImageModalList={setImageModalList}
        />
      ) : (
        <></>
      )}

      <SecondaryModal
        setIsImageModalOpen={setIsImageModalOpen}
        isImageModalOpen={isImageModalOpen}
        imageModalList={imageModalList}
      />

      <BackToTop isMobile={isMobile} />

      <main
        id="main"
        onMouseMove={({ clientX: x, clientY: y }) => {
          if (parallaxRef.current) {
            if (isInViewport(parallaxRef.current)) {
              setParallax({ xy: calc(x, y) });
            }
          }
        }}
      >
        <Home parallax={parallax} parallaxRef={parallaxRef} />
        <About isMobile={isMobile} />
        <Work
          isMobile={isMobile}
          viewport={viewport}
          onModalClose={onModalClose}
          onModalOpen={onModalOpen}
          setIsModalOpen={setIsModalOpen}
          setModalInfo={setModalInfo}
          setIsImageModalOpen={setIsImageModalOpen}
          setImageModalList={setImageModalList}
        />
        <Articles isMobile={isMobile} />
        <Contact isMobile={isMobile} />
        <Footer />
      </main>
    </>
  );
};
