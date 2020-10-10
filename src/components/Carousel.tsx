import React, { FC, useState } from "react";
import {
  scaleSwitch,
  opacitySwitch,
  zIndexSwitch,
  transitionSwitch,
} from "../assets/util";

interface Props {
  images: Array<string>;
  viewport: number;
}

const Carousel: FC<Props> = (props: Props) => {
  const { images, viewport } = props;

  const [imageList, setImageList] = useState([0, 1, 2, 3, 4]);

  const translateSwitch = (index) => {
    switch (index) {
      case 0:
        return `calc(-50% - ${viewport / 3}px)`;
      case 1:
        return `calc(-50% - ${
          viewport < 1400 ? viewport / 4 : viewport / 5
        }px)`;
      case 2:
        return `calc(-50% + 0px)`;
      case 3:
        return `calc(-50% + ${
          viewport < 1400 ? viewport / 4 : viewport / 5
        }px)`;
      case 4:
        return `calc(-50% + ${viewport / 3}px)`;
    }
  };

  return (
    <div
      className="carousel"
      style={{
        height:
          ((Math.min(viewport / 2, 800) * 9) / 16) *
          (viewport < 1400 ? 1.4 : 1.15),
      }}
      onDrag={(e) => {
        console.log(e);
      }}
    >
      <p
        className="left"
        onClick={() => {
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
        }}
      >
        left
      </p>
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
      <p
        className="right"
        onClick={() => {
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
        }}
      >
        right
      </p>
    </div>
  );
};

export default Carousel;
