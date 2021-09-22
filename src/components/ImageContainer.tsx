import React, { FC } from "react";
import { Image } from "./Image";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

interface Props {
  src: string;
  thumb: string;
  alt: string;
  height: number;
  width: number;
  carouselHeight?: number;
}

const ImageContainer: FC<Props> = ({ thumb, alt, src, height, width, carouselHeight }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          setIsVisible(true);
        }
        observerElement.unobserve(ref.current);
      }
    },
  });

  const aspectRatio = (height / width) * 100;

  if (carouselHeight) {
    return (
      <div
        className="image-container-wrapper"
        style={{
          width: (width / height) * carouselHeight,
          height: carouselHeight,
        }}
      >
        <div
          ref={ref}
          className="image-container"
          style={{
            width: (width / height) * carouselHeight,
            height: carouselHeight,
          }}
        >
          {isVisible && (
            <Image
              src={src}
              thumb={thumb}
              alt={alt}
              height={carouselHeight}
              width={(width / height) * carouselHeight}
            />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div ref={ref} className="image-container" style={{ paddingBottom: `${aspectRatio}%` }}>
        {isVisible && <Image src={src} thumb={thumb} alt={alt} />}
      </div>
    );
  }
};

export default ImageContainer;
