import React from "react";
import { Image } from "../util/image";

import { scaleSwitch, opacitySwitch, zIndexSwitch, transitionSwitch, translateSwitch } from "../util";
import ImageContainer from "./ImageContainer";

interface Props {
  image: Image;
  index: number;
  viewport: number;
  carouselHeight: number;
}

const CarouselImage: React.FC<Props> = ({ image, index, carouselHeight }) => {
  return (
    <div
      className="carousel-image"
      style={{
        transform: `translateX(${translateSwitch(index)}) scale(${scaleSwitch(index)})`,
        zIndex: zIndexSwitch(index),
        opacity: opacitySwitch(index),
        transition: `all ${transitionSwitch(index)}ms ease`,
      }}
    >
      <ImageContainer
        src={image.src}
        thumb={image.thumb}
        alt={image.alt}
        width={image.width}
        height={image.height}
        carouselHeight={carouselHeight}
      />
    </div>
  );
};

export default CarouselImage;
