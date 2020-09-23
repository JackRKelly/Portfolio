import React, { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const ArticleWrapper: FC<Props> = (props: Props) => {
  return <ul className="article-wrapper">{props.children}</ul>;
};

export default ArticleWrapper;
