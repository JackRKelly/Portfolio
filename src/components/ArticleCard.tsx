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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <li>
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
          <h5>{title}</h5>
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
      </li>
    </a>
  );
};

export default ArticleCard;
