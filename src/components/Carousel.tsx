import React, { FC, useState } from "react";
import LeftArrow from "../assets/svg/LeftArrow";
import {
  scaleSwitch,
  opacitySwitch,
  zIndexSwitch,
  transitionSwitch,
} from "../assets/util";
import LoadingImage from "../assets/images/loading.svg";
import Img from "react-cool-img";
import RightArrow from "../assets/svg/RightArrow";

interface Props {
  images: Array<string>;
  viewport: number;
  color?: string;
  setImageListVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel: FC<Props> = (props: Props) => {
  const { images, viewport, color, setImageListVisible } = props;

  const [imageList, setImageList] = useState([0, 1, 2, 3, 4]);

  const [xDown, setXDown] = useState<null | number>(null);

  const translateSwitch = (index) => {
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

  const previousImage = () => {
    setImageList((oldList) => {
      return oldList.map((listItem) => {
        if (listItem > 0) {
          return (listItem -= 1);
        }
        if (listItem === 0) {
          return (listItem = images.length - 1);
        }
        return listItem;
      });
    });
  };

  const nextImage = () => {
    setImageList((oldList) => {
      return oldList.map((listItem) => {
        if (listItem < images.length - 1) {
          return (listItem += 1);
        }
        if (listItem === images.length - 1) {
          return (listItem = 0);
        }
        return listItem;
      });
    });
  };

  return (
    <div
      className="carousel"
      style={{
        height:
          ((Math.min(viewport / 2, 800) * 9) / 16) *
          (viewport < 1400 ? 1.4 : viewport < 2000 ? 1 : 1.075),
      }}
      onTouchStart={(e) => {
        const firstTouch = e.touches[0];
        setXDown(firstTouch.clientX);
      }}
      onTouchMove={(e) => {
        if (!xDown) {
          return;
        }

        let xUp = e.touches[0].clientX;
        let xDiff = xDown - xUp;

        if (xDiff > 0) {
          nextImage();
        } else {
          previousImage();
        }

        setXDown(null);
      }}
    >
      <div
        className="left"
        style={{
          top:
            (Math.min(viewport / 2, 800) * 9) / 16 / 2 -
            (viewport < 800 ? 2 : 55),
        }}
        onClick={previousImage}
      >
        <LeftArrow color={color} />
      </div>
      <div
        className="images"
        onClick={() => {
          setImageListVisible(true);
        }}
      >
        {imageList.map((img, index) => (
          <Img
            placeholder={LoadingImage}
            src={images[img]}
            className={`image-${img} position-${index}`}
            alt=""
            lazy={true}
            style={{
              width: Math.min(viewport / 2, 800),
              transform: `translateX(${translateSwitch(
                index
              )}) scale(${scaleSwitch(index)})`,
              zIndex: zIndexSwitch(index),
              opacity: opacitySwitch(index),
              transition: `all ${transitionSwitch(index)}ms ease`,
            }}
            key={img}
          />
        ))}
      </div>
      <div
        className="right"
        style={{
          top:
            (Math.min(viewport / 2, 800) * 9) / 16 / 2 -
            (viewport < 800 ? 2 : 55),
        }}
        onClick={nextImage}
      >
        <RightArrow color={color} />
      </div>
    </div>
  );
};

export default Carousel;
