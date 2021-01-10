import React, { useEffect, useState } from "react";
import { Close } from "../assets/svg/";
import { ExternalLink } from "../assets/svg/";
import { Github } from "../assets/svg/";
import { LinkIcon } from "../assets/svg/";
import { PictureIcon } from "../assets/svg/";
import { Preview } from "../assets/svg/";
import { ModalDetails } from "../util";
import Carousel from "./Carousel";

interface Props {
  isModalOpen: boolean;
  modalInfo: ModalDetails;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onModalClose: () => void;
  checkCurrentRef: () => void;
  viewport: number;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const PrimaryModal: React.FC<Props> = ({
  modalInfo,
  isModalOpen,
  setIsModalOpen,
  onModalClose,
  checkCurrentRef,
  viewport,
  setIsImageModalOpen,
  setImageModalList,
}) => {
  const RenderCarousel = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
      return function cleanup() {
        setIsMounted(false);
      };
    }, []);
    if (isMounted) {
      return (
        <Carousel
          images={modalInfo.images}
          viewport={viewport}
          color={modalInfo.primaryColor}
          setIsImageModalOpen={setIsImageModalOpen}
          setImageModalList={setImageModalList}
        />
      );
    } else {
      return <></>;
    }
  };

  return (
    <div
      className="modal-primary"
      style={{
        opacity: isModalOpen ? "1" : "0",
        pointerEvents: isModalOpen ? "auto" : "none",
      }}
    >
      <div className="work-details">
        <div
          onClick={() => {
            setIsModalOpen(false);
            onModalClose();
            checkCurrentRef();
          }}
          className="close"
        >
          <Close />
        </div>
        <div className="content">
          <RenderCarousel />

          <h5
            style={{
              color: modalInfo.primaryColor ? modalInfo.primaryColor : "",
            }}
          >
            {modalInfo.title}
          </h5>
          <p>{modalInfo.description}</p>
        </div>
        <div className="links">
          <ul className="link-list">
            {modalInfo.live ? (
              <li>
                <a
                  href={modalInfo.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="svg-wrapper">
                    <span className="main">
                      <LinkIcon />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </div>
                  Live
                </a>
              </li>
            ) : (
              <> </>
            )}
            {modalInfo.preview ? (
              <li>
                <a
                  href={modalInfo.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="svg-wrapper">
                    <span className="main">
                      <Preview />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </div>
                  Preview
                </a>
              </li>
            ) : (
              <> </>
            )}
            {modalInfo.github ? (
              <li>
                <a
                  href={modalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="svg-wrapper">
                    <span className="main">
                      <Github />
                    </span>
                    <span className="sub">
                      <ExternalLink />
                    </span>
                  </div>
                  Code
                </a>
              </li>
            ) : (
              <> </>
            )}
            <li
              onClick={() => {
                setIsImageModalOpen(true);
                setImageModalList(modalInfo.images);
              }}
            >
              <span className="link">
                <div className="svg-wrapper">
                  <span className="main">
                    <PictureIcon />
                  </span>
                </div>
                Images
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrimaryModal;
