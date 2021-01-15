import React, { FC } from "react";
import { ExternalLinkIcon } from "../assets/svg/";
import ImageContainer from "./ImageContainer";
import { Image } from "../util/image";
interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  link: string;
  image: Image;
}

const ArticleCard: FC<Props> = (props: Props) => {
  const { description, tags, title, link, image } = props;

  return (
    <li className="article-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="image">
          <ImageContainer
            src={image.src}
            thumb={image.thumb}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
          <ul className="tag-list">
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="text">
          <p className="title">{title}</p>
          <p>{description}</p>
          <div
            className="link"
            title={`Open external link for "${title}" article`}
          >
            <p>
              Visit on Dev.to <ExternalLinkIcon />
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default ArticleCard;
