import React, { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ScrollToTop } from "../assets/svg";

interface Props {
  isMobile: boolean;
}

export const BackToTop: FC<Props> = ({ isMobile }) => {
  if (isMobile) {
    return <></>;
  } else {
    return (
      <AnchorLink offset="0" href="#main">
        <div
          className="back-to-top"
          style={
            {
              // opacity: activeRef !== 0 ? 1 : 0,
              // pointerEvents: activeRef !== 0 ? "auto" : "none",
            }
          }
        >
          <ScrollToTop />
        </div>
      </AnchorLink>
    );
  }
};
