import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const Content: FC<Props> = (props: Props) => {
  return <div className="content">{props.children}</div>;
};

export default Content;
