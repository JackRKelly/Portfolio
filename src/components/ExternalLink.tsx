import React, { FC } from "react";
import { ExternalLinkIcon } from "../assets/svg";

interface Props {
  text: string;
  link: string;
}

export const ExternalLink: FC<Props> = ({ text, link }) => {
  return (
    <a href={link} className="external-link" target="_blank" rel="noopener noreferrer">
      {text}
      <ExternalLinkIcon />
    </a>
  );
};
