import React, { Dispatch, SetStateAction } from "react";
import { ExpandWork } from "../assets/svg/";
import { ModalDetails, onModalOpen } from "../util";
import { Image } from "../util/image";
import { splitDescription } from "../util";
import ImageContainer from "./ImageContainer";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  live?: string;
  images: Image[];
  thumbnail: Image;
  primaryColor?: string;
  viewport: number;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setModalInfo: Dispatch<SetStateAction<ModalDetails | undefined>>;
  setIsImageModalOpen: Dispatch<SetStateAction<boolean>>;
  setImageModalList: Dispatch<SetStateAction<Image[]>>;
}

const WorkCard: React.FC<Props> = (props: Props) => {
  const {
    description,
    tags,
    title,
    images,
    viewport,
    thumbnail,
    primaryColor,
    github,
    live,
    preview,
    setModalInfo,
    setIsModalOpen,
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
              thumbnail: thumbnail,
              primaryColor: primaryColor,
              github: github,
              live: live,
              preview: preview,
            };
          });
          setIsModalOpen(true);
          onModalOpen();
          document.title = `${title} | Jack Kelly`;
        }}
      >
        <div className="image">
          <ImageContainer
            src={thumbnail.src}
            thumb={thumbnail.thumb}
            alt={thumbnail.alt}
            width={thumbnail.width}
            height={thumbnail.height}
          />
          <ul className="tag-list">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <p>{splitDescription(description)}</p>
          <div className="link" title={`Open work modal for ${title}`}>
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
