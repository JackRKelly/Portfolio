import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const WorkWrapper = (props: Props) => {
  return <ul className="work-wrapper">{props.children}</ul>;
};

export default WorkWrapper;
