import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Content = (props: Props) => {
  return <div className="content">{props.children}</div>;
};

export default Content;
