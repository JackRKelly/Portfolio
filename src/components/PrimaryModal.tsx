import React from "react";
import { Image } from "../util/image";
import { RenderCarousel } from "./RenderCarousel";
import { Close } from "../assets/svg/";
import { ExternalLinkIcon } from "../assets/svg/";
import { Github } from "../assets/svg/";
import { LinkIcon } from "../assets/svg/";
import { PictureIcon } from "../assets/svg/";
import { Preview } from "../assets/svg/";
import { ModalDetails } from "../util";
import { onModalClose } from "../util";

interface Props {
  isModalOpen: boolean;
  modalInfo?: ModalDetails;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  viewport: number;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
}

const PrimaryModal: React.FC<Props> = ({
  modalInfo,
  isModalOpen,
  setIsModalOpen,
  viewport,
  setIsImageModalOpen,
  setImageModalList,
}) => {
  if (modalInfo) {
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
              onModalClose();
              setIsModalOpen(false);
              // checkCurrentRef();
            }}
            className="close"
          >
            <Close />
          </div>
          <div className="content">
            <RenderCarousel
              isModalOpen={isModalOpen}
              viewport={viewport}
              modalInfo={modalInfo}
              setIsImageModalOpen={setIsImageModalOpen}
              setImageModalList={setImageModalList}
            />

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
                  <a href={modalInfo.live} target="_blank" rel="noopener noreferrer">
                    <div className="svg-wrapper">
                      <span className="main">
                        <LinkIcon />
                      </span>
                      <span className="sub">
                        <ExternalLinkIcon />
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
                  <a href={modalInfo.preview} target="_blank" rel="noopener noreferrer">
                    <div className="svg-wrapper">
                      <span className="main">
                        <Preview />
                      </span>
                      <span className="sub">
                        <ExternalLinkIcon />
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
                  <a href={modalInfo.github} target="_blank" rel="noopener noreferrer">
                    <div className="svg-wrapper">
                      <span className="main">
                        <Github />
                      </span>
                      <span className="sub">
                        <ExternalLinkIcon />
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
  } else {
    return <></>;
  }
};

export default PrimaryModal;
