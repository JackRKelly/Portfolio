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
  const { image, index, viewport } = props;

  const translateSwitch = (index: number) => {
    switch (index) {
      case 0:
        return `calc(-50% - ${Math.min(viewport / 3, 700)}px)`;
      case 1:
        return `calc(-50% - ${Math.min(
          viewport < 1400 ? viewport / 4 : viewport / 5,
          500
        )}px)`;
      case 2:
        return `calc(-50% + 0px)`;
      case 3:
        return `calc(-50% + ${Math.min(
          viewport < 1400 ? viewport / 4 : viewport / 5,
          500
        )}px)`;
      case 4:
        return `calc(-50% + ${Math.min(viewport / 3, 700)}px)`;
    }
  };

  return (
    <Img
      placeholder={LoadingImage}
      src={image}
      alt=""
      lazy={true}
      style={{
        width: Math.min(viewport / 2, 800),
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
