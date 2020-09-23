import React from "react";

import PlaceholderImage from "../assets/images/placeholder.png";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  link: string;
}

const ArticleCard = (props: Props) => {
  const { description, tags, title, link } = props;

  return (
    <li>
      <div className="image">
        <img src={PlaceholderImage} alt="" />
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="text">
        <h5>{title}</h5>
        <p>{description}</p>
        <a href={link}>Visit on Dev.to</a>
      </div>
    </li>
  );
};

export default ArticleCard;
