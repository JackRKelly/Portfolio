import React from "react";
import DevTo from "../assets/svg/devto";
import Github from "../assets/svg/github";
import JRKLogo from "../assets/svg/jrklogo";
import LinkedIn from "../assets/svg/linkedin";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navigation = () => {
  return (
    <nav>
      <ul className="container">
        <li className="left">
          <ul>
            <li className="logo">
              <AnchorLink offset="100" href="#home">
                <JRKLogo />
              </AnchorLink>
            </li>
            <li className="divider">
              <div></div>
            </li>
            <li className="icon">
              <a
                href="https://github.com/JackRKelly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
            </li>
            <li className="icon">
              <a
                href="https://dev.to/jackrkelly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DevTo />
              </a>
            </li>
            <li className="icon">
              <a
                href="https://www.linkedin.com/in/jackkelly4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn />
              </a>
            </li>
          </ul>
        </li>
        <li className="right">
          <ul>
            <li>
              <AnchorLink offset="70" href="#about">
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="70" href="#work">
                Work
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="70" href="#articles">
                Articles
              </AnchorLink>
            </li>
            <li>
              <AnchorLink offset="70" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
