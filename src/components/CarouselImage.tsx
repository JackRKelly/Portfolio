import React from "react";
import Img from "react-cool-img";
import LoadingImage from "../assets/images/loading.svg";
import {
  scaleSwitch,
  opacitySwitch,
  zIndexSwitch,
  transitionSwitch,
} from "../assets/util";

interface Props {
  image: string;
  index: number;
  viewport: number;
}

const CarouselImage: React.FC<Props> = (props) => {
  const { image, index } = props;

  const translateSwitch = (index: number) => {
    switch (index) {
      case 0:
        return `-125%`;
      case 1:
        return `-100%`;
      case 2:
        return `-50%`;
      case 3:
        return `0%`;
      case 4:
        return `25%`;
    }
  };

  return (
    <Img
      placeholder={LoadingImage}
      src={image}
      alt=""
      lazy={true}
      style={{
        transform: `translateX(${translateSwitch(index)}) scale(${scaleSwitch(
          index
        )})`,
        zIndex: zIndexSwitch(index),
        opacity: opacitySwitch(index),
        transition: `all ${transitionSwitch(index)}ms ease`,
      }}
    />
  );
};

export default CarouselImage;
