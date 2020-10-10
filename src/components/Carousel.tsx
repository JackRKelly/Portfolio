import React, { FC, useState } from "react";

interface Props {
  images: Array<string>;
}

const Carousel: FC<Props> = (props: Props) => {
  const { images } = props;

  const [currentImage, setCurrentImage] = useState<number>(2);

  return (
    <div className="carousel">
      <p
        className="left"
        onClick={() => {
          setCurrentImage(currentImage - 1);
        }}
      >
        left
      </p>
      <div className="images">
        {images.map((img, index) => (
          <img
            src={img}
            className={`${index}`}
            alt=""
            key={index}
            style={{
              transform:
                currentImage === index - 1
                  ? `translateX(calc(-50% + -${index * 300}px))`
                  : currentImage === index + 1
                  ? `translateX(calc(-50% + ${index * 300}px))`
                  : "translateX(-50%)",
              opacity:
                currentImage < index + 2 && currentImage > index - 2 ? 1 : 0,
            }}
          />
        ))}
      </div>
      <p
        className="right"
        onClick={() => {
          setCurrentImage(currentImage + 1);
        }}
      >
        right
      </p>
    </div>
  );
};

export default Carousel;
