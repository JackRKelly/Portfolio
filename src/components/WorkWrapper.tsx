import React from "react";

interface Props {
  children?: React.ReactNode;
}

const WorkWrapper: React.FC<Props> = ({ children }) => {
  return <ul className="work-wrapper">{children}</ul>;
};

export default WorkWrapper;
