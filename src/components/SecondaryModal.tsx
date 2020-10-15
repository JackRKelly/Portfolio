import React, { useEffect, useRef } from "react";
import Img from "react-cool-img";
import BackArrow from "../assets/svg/BackArrow";
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
  const secondaryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (secondaryRef.current) {
      secondaryRef.current.scrollTo(0, 0);
    }
  }, [isImageModalOpen]);

  return (
    <div
      className="modal-secondary"
      style={{
        opacity: isImageModalOpen ? "1" : "0",
        pointerEvents: isImageModalOpen ? "auto" : "none",
      }}
      ref={secondaryRef}
    >
      <div className="image-list-wrapper">
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
