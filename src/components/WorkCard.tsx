import React, { FC, useState } from "react";

import PlaceholderImage from "../assets/images/placeholder.png";
import Close from "../assets/svg/Close";
import ExpandWork from "../assets/svg/ExpandWork";
import Carousel from "./Carousel";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  images: Array<string>;
  checkCurrentRef: () => void;
}

const WorkCard: FC<Props> = (props: Props) => {
  const { description, tags, title, checkCurrentRef, images } = props;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <li>
      <div
        className="work-details"
        style={{
          opacity: isVisible ? "1" : "0",
          pointerEvents: isVisible ? "auto" : "none",
        }}
      >
        <div className="content">
          <div className="carousel">
            <Carousel images={images} />
          </div>

          <div className="text">
            <h5>{title}</h5>
            <p>{description}</p>
            <p
              onClick={() => {
                setIsVisible(false);
                checkCurrentRef();
              }}
              className="close"
            >
              Close <Close />
            </p>
          </div>
        </div>
      </div>
      <div
        className="work-card"
        onClick={() => {
          setIsVisible(!isVisible);
          document.title = `${title} | Jack Kelly`;
        }}
      >
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
          <p>
            {description.split(" ").slice(1, 35).join(" ")}
            {description.split(" ").length > 35 ? "..." : ""}
          </p>
          <div className="link">
            <p>
              More Details <ExpandWork />
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default WorkCard;
