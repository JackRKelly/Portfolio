import React, { FC, useState } from "react";

import PlaceholderImage from "../assets/images/placeholder.png";
import ExpandWork from "../assets/svg/ExpandWork";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
}

const WorkCard: FC<Props> = (props: Props) => {
  const { description, tags, title } = props;

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
        <div
          className="background"
          onClick={() => {
            setIsVisible(false);
          }}
        ></div>
        <div className="content">
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
            <p
              onClick={() => {
                setIsVisible(false);
              }}
              className="close"
            >
              Close
            </p>
          </div>
        </div>
      </div>
      <div
        className="work-card"
        onClick={() => {
          setIsVisible(!isVisible);
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
          <p>{description}</p>
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
