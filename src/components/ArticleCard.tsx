import React, { FC } from "react";
import { ExternalLinkIcon } from "../assets/svg/";
import LoadingImage from "../assets/images/loading.svg";
import Img from "react-cool-img";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  link: string;
  image: string;
}

const ArticleCard: FC<Props> = (props: Props) => {
  const { description, tags, title, link, image } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <li>
        <div className="image">
          <Img
            placeholder={LoadingImage}
            src={image}
            alt="Work Card Thumbnail"
            lazy={true}
          />
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
              Visit on Dev.to <ExternalLinkIcon />
            </p>
          </div>
        </div>
      </li>
    </a>
  );
};

export default ArticleCard;
