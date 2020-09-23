import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ArticleWrapper = (props: Props) => {
  return <ul className="article-wrapper">{props.children}</ul>;
};

export default ArticleWrapper;
