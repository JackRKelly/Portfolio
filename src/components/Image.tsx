import React, { FC } from "react";

interface Props {
  alt: string;
  thumb: string;
  src: string;
  height?: number;
  width?: number;
}

export const Image: FC<Props> = ({ alt, thumb, src, height, width }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <>
      <img
        className="lazy-image thumb"
        alt={alt}
        src={thumb}
        style={{
          visibility: isLoaded ? "hidden" : "visible",
          width: width,
          height: height,
        }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="lazy-image full"
        style={{ opacity: isLoaded ? 1 : 0, width: width, height: height }}
        alt={alt}
        src={src}
      />
    </>
  );
};
