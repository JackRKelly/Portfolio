import React, { FC } from "react";

import PlaceholderImage from "../assets/images/placeholder.png";
import ExpandWork from "../assets/svg/ExpandWork";

interface Props {
  description: string;
  tags: Array<string>;
  title: string;
}

const WorkCard: FC<Props> = (props: Props) => {
  const { description, tags, title } = props;

  return (
    <li>
      <div className="image">
        <img src={PlaceholderImage} alt="" />
        <ul className="tag-list">
          {tags.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
            </li>
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
    </li>
  );
};

export default WorkCard;
