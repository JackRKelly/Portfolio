import React, { FC, useState } from "react";
import LeftArrow from "../assets/svg/LeftArrow";
import {
  scaleSwitch,
  opacitySwitch,
  zIndexSwitch,
  transitionSwitch,
} from "../assets/util";

interface Props {
  images: Array<string>;
  viewport: number;
  color?: string;
}

const Carousel: FC<Props> = (props: Props) => {
  const { images, viewport, color } = props;

  const [imageList, setImageList] = useState([0, 1, 2, 3, 4]);

  const [xDown, setXDown] = useState<null | number>(null);
  const [yDown, setYDown] = useState<null | number>(null);

  const translateSwitch = (index) => {
    switch (index) {
      case 0:
        return `calc(-50% - ${Math.min(viewport / 3, 800)}px)`;
      case 1:
        return `calc(-50% - ${Math.min(
          viewport < 1400 ? viewport / 4 : viewport / 5,
          600
        )}px)`;
      case 2:
        return `calc(-50% + 0px)`;
      case 3:
        return `calc(-50% + ${Math.min(
          viewport < 1400 ? viewport / 4 : viewport / 5,
          600
        )}px)`;
      case 4:
        return `calc(-50% + ${Math.min(viewport / 3, 800)}px)`;
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
          (viewport < 1400 ? 1.4 : 1.15),
      }}
      onTouchStart={(e) => {
        const firstTouch = e.touches[0];
        setXDown(firstTouch.clientX);
        setYDown(firstTouch.clientY);
      }}
      onTouchMove={(e) => {
        if (!xDown || !yDown) {
          return;
        }

        var xUp = e.touches[0].clientX;
        var yUp = e.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          if (xDiff > 0) {
            nextImage();
          } else {
            previousImage();
          }
        } else {
          if (yDiff > 0) {
            console.log("up swipe");
          } else {
            console.log("down swipe");
          }
        }
        setXDown(null);
        setYDown(null);
      }}
    >
      <div
        className="left"
        style={{
          top:
            (Math.min(viewport / 2, 800) * 9) / 16 / 2 -
            (viewport < 800 ? 2 : 25),
        }}
        onClick={previousImage}
      >
        <LeftArrow color={color} />
      </div>
      <div className="images">
        {imageList.map((img, index) => (
          <img
            src={images[img]}
            className={`image-${img} position-${index}`}
            alt=""
            key={img}
            style={{
              width: Math.min(viewport / 2, 800),
              transform: `translateX(${translateSwitch(
                index
              )}) scale(${scaleSwitch(index)})`,
              zIndex: zIndexSwitch(index),
              opacity: opacitySwitch(index),
              transition: `all ${transitionSwitch(index)}ms ease`,
            }}
          />
        ))}
      </div>
      <div
        className="right"
        style={{
          top:
            (Math.min(viewport / 2, 800) * 9) / 16 / 2 -
            (viewport < 800 ? 2 : 25),
        }}
        onClick={nextImage}
      >
        <LeftArrow color={color} />
      </div>
    </div>
  );
};

export default Carousel;
