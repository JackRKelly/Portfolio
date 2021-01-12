import React, { FC } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ScrollToTop } from "../assets/svg";

interface Props {
  isMobile: boolean;
  activeRef: number;
}

export const BackToTop: FC<Props> = ({ isMobile, activeRef }) => {
  if (isMobile) {
    return <></>;
  } else {
    return (
      <AnchorLink offset="0" href="#main">
        <div
          className="back-to-top"
          title="Back to top"
          style={{
            opacity: activeRef > 1 ? 1 : 0,
            pointerEvents: activeRef > 1 ? "auto" : "none",
          }}
        >
          <ScrollToTop />
        </div>
      </AnchorLink>
    );
  }
};
