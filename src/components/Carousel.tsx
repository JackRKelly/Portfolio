import React, { FC, useState } from "react";
import { LeftArrow } from "../assets/svg/";
import { RightArrow } from "../assets/svg/";
import { debounce } from "ts-debounce";
import CarouselImage from "./CarouselImage";

interface Props {
  images: Array<string>;
  viewport: number;
  color?: string;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const Carousel: FC<Props> = (props: Props) => {
  const {
    images,
    viewport,
    color,
    setIsImageModalOpen,
    setImageModalList,
  } = props;

  const [imageList, setImageList] = useState([0, 1, 2, 3, 4]);

  const [xDown, setXDown] = useState<null | number>(null);

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

  const wheelHandler = (eDelta: number) => {
    if (eDelta < 0) {
      previousImage();
    } else if (eDelta > 0) {
      nextImage();
    }
  };

  const wheelHandlerDebounced = debounce((eDelta: number) => {
    wheelHandler(eDelta);
  }, 75);

  return (
    <div
      className="carousel"
      style={{
        height: ((Math.min(viewport / 2, 800) * 9) / 16) * 0.8,
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
      onWheel={(e) => {
        wheelHandlerDebounced(e.deltaY);
      }}
    >
      <div className="left" onClick={previousImage}>
        <LeftArrow color={color} />
      </div>
      <div
        className="images"
        onClick={() => {
          setIsImageModalOpen(true);
          setImageModalList(images);
        }}
      >
        {imageList.map((img, index) => (
          <CarouselImage
            index={index}
            viewport={viewport}
            image={images[img]}
            key={img}
          />
        ))}
      </div>

      <div className="right" onClick={nextImage}>
        <RightArrow color={color} />
      </div>
    </div>
  );
};

export default Carousel;
