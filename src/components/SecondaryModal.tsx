import React, { useEffect, useRef } from "react";
import Img from "react-cool-img";
import { BackArrow } from "../assets/svg/";
import LoadingImage from "../assets/images/loading.svg";

interface Props {
  isImageModalOpen: boolean;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageModalList: Array<string>;
}

const SecondaryModal: React.FC<Props> = ({
  setIsImageModalOpen,
  isImageModalOpen,
  imageModalList,
}) => {
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
              <a href={img} target="_blank" rel="noopener noreferrer">
                <Img placeholder={LoadingImage} src={img} alt="" lazy={true} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SecondaryModal;
