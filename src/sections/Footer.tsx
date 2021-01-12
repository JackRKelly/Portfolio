import React, { FC } from "react";
import { JRKLogoStroke } from "../assets/svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Content from "../components/Content";

export const Footer: FC = () => {
  return (
    <footer id="footer">
      <Content>
        <div className="logo-wrapper">
          <div className="jrk-logo" title="Back to top">
            <AnchorLink offset="0" href="#main">
              <JRKLogoStroke />
            </AnchorLink>
          </div>
        </div>
      </Content>
    </footer>
  );
};
