import React from "react";
import { ExpandWork } from "../assets/svg/";
import LoadingImage from "../assets/images/loading.svg";
import Img from "react-cool-img";
import { ModalDetails } from "../util";

import { splitDescription } from "../util";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  live?: string;
  images: Array<string>;
  thumbnail: string;
  primaryColor?: string;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalInfo: React.Dispatch<React.SetStateAction<ModalDetails | undefined>>;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const WorkCard: React.FC<Props> = (props: Props) => {
  const {
    description,
    tags,
    title,
    images,
    viewport,
    onModalOpen,
    onModalClose,
    thumbnail,
    primaryColor,
    github,
    live,
    preview,
    setModalInfo,
    setIsModalOpen,
    setIsImageModalOpen,
    setImageModalList,
  } = props;

  return (
    <li className="work-card">
      <div
        className="work-card"
        onClick={() => {
          setModalInfo(() => {
            return {
              description: description,
              tags: tags,
              title: title,
              images: images,
              viewport: viewport,
              onModalOpen: onModalOpen,
              onModalClose: onModalClose,
              thumbnail: thumbnail,
              primaryColor: primaryColor,
              github: github,
              live: live,
              preview: preview,
              setIsModalOpen: setIsModalOpen,
              setIsImageModalOpen: setIsImageModalOpen,
              setImageModalList: setImageModalList,
            };
          });
          setIsModalOpen(true);
          onModalOpen();
          document.title = `${title} | Jack Kelly`;
        }}
      >
        <div className="image">
          <Img
            placeholder={LoadingImage}
            src={thumbnail}
            alt="Work Card Thumbnail"
            lazy={true}
          />
          <ul className="tag-list">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="text">
          <h5>{title}</h5>
          <p>{splitDescription(description)}</p>
          <div className="link">
            <p>
              More Details <ExpandWork />
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkCard;
