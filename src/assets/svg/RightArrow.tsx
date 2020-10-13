import React, { FC } from "react";

interface Props {
  color?: string;
}

const RightArrow: FC<Props> = (props) => {
  const { color } = props;
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.07 37.07"
      style={{ fill: color ? color : "" }}
    >
      <polygon points="15,18.5 0,33.5 3.5,37.1 22.1,18.5 18.5,15 3.5,0 0,3.5 " />
    </svg>
  );
};

export default RightArrow;
