import React, { useEffect, useRef } from "react";
import { BackArrow } from "../assets/svg/";
import { Image } from "../util/image";
import ImageContainer from "./ImageContainer";

interface Props {
  isImageModalOpen: boolean;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageModalList: Image[];
}

const SecondaryModal: React.FC<Props> = ({ setIsImageModalOpen, isImageModalOpen, imageModalList }) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (listRef.current) {
        listRef.current.scrollTo(0, 0);
      }
    }, 200);
  }, [isImageModalOpen]);

  return (
    <div
      className="modal-secondary"
      style={{
        opacity: isImageModalOpen ? "1" : "0",
        pointerEvents: isImageModalOpen ? "auto" : "none",
      }}
    >
      <div className="image-list-wrapper" ref={listRef}>
        <div
          className="back-arrow"
          onClick={() => {
            setIsImageModalOpen(false);
          }}
        >
          <BackArrow />
        </div>
        <ul className="image-list">
          {imageModalList.map((img, index) => (
            <li key={index}>
              <a href={img.src} target="_blank" rel="noopener noreferrer">
                <ImageContainer src={img.src} thumb={img.thumb} alt={img.alt} width={img.width} height={img.height} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryModal;
