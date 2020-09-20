import React from "react";
import DevTo from "../assets/svg/devto";
import Github from "../assets/svg/github";
import JRKLogo from "../assets/svg/jrklogo";
import LinkedIn from "../assets/svg/linkedin";

const Navigation = () => {
  return (
    <nav>
      <ul className="container">
        <li className="left">
          <ul>
            <li className="logo">
              <a href="#home">
                <JRKLogo />
              </a>
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
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#articles">Articles</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
