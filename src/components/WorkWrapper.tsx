import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const WorkWrapper: FC<Props> = (props: Props) => {
  return <ul className="work-wrapper">{props.children}</ul>;
};

export default WorkWrapper;
