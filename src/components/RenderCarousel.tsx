import { ModalDetails } from "../util";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { Image } from "../util/image";
interface Props {
  isModalOpen: boolean;
  modalInfo?: ModalDetails;
  viewport: number;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Image[]>>;
}

export const RenderCarousel: React.FC<Props> = ({
  isModalOpen,
  modalInfo,
  viewport,
  setIsImageModalOpen,
  setImageModalList,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return function cleanup() {
      setIsMounted(false);
    };
  }, []);

  if (isMounted && modalInfo) {
    return (
      <Carousel
        isModalOpen={isModalOpen}
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
