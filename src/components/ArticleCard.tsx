import React, { FC } from "react";
import PlaceholderImage from "../assets/images/placeholder.png";
import ExternalLink from "../assets/svg/ExternalLink";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  link: string;
}

const ArticleCard: FC<Props> = (props: Props) => {
  const { description, tags, title, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
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
          <div className="link">
            <p>
              Visit on Dev.to <ExternalLink />
            </p>
          </div>
        </div>
      </li>
    </a>
  );
};

export default ArticleCard;
