//FridgeMan
import FridgeMan1 from "../assets/images/fridgeman/Screenshot_1.png";
import FridgeMan2 from "../assets/images/fridgeman/Screenshot_2.png";
import FridgeMan3 from "../assets/images/fridgeman/Screenshot_3.png";
import FridgeMan4 from "../assets/images/fridgeman/Screenshot_4.png";
import FridgeMan5 from "../assets/images/fridgeman/Screenshot_5.png";
import FridgeMan6 from "../assets/images/fridgeman/Screenshot_6.png";
import FridgeMan7 from "../assets/images/fridgeman/Screenshot_7.png";
//JackSquared
import JackSquared1 from "../assets/images/jacksquared/Screenshot_1.png";
import JackSquared2 from "../assets/images/jacksquared/Screenshot_2.png";
import JackSquared3 from "../assets/images/jacksquared/Screenshot_3.png";
import JackSquared4 from "../assets/images/jacksquared/Screenshot_4.png";
import JackSquared5 from "../assets/images/jacksquared/Screenshot_5.png";
import JackSquared6 from "../assets/images/jacksquared/Screenshot_6.png";
import JackSquared7 from "../assets/images/jacksquared/Screenshot_7.png";
import JackSquared8 from "../assets/images/jacksquared/Screenshot_8.png";
//Jacks Peppers
import JacksPeppers1 from "../assets/images/jackspeppers/Screenshot_1.png";
import JacksPeppers2 from "../assets/images/jackspeppers/Screenshot_2.png";
import JacksPeppers3 from "../assets/images/jackspeppers/Screenshot_3.png";
import JacksPeppers4 from "../assets/images/jackspeppers/Screenshot_4.png";
import JacksPeppers5 from "../assets/images/jackspeppers/Screenshot_5.png";
import JacksPeppers6 from "../assets/images/jackspeppers/Screenshot_6.png";
//Articles
import FullStackApplication from "../assets/images/articles/full-stack.jpg";
import Networking from "../assets/images/articles/networking.jpg";

export interface Image {
  width: number;
  height: number;
  thumb: string;
  src: string;
  alt: string;
}

export const images: {
  fridgeman: Image[];
  jacksquared: Image[];
  jackspeppers: Image[];
  articles: {
    networking: Image;
    fullstack: Image;
  };
} = {
  fridgeman: [
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan1,
      src: FridgeMan1,
      alt: "FridgeMan Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan2,
      src: FridgeMan2,
      alt: "FridgeMan Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan3,
      src: FridgeMan3,
      alt: "FridgeMan Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan4,
      src: FridgeMan4,
      alt: "FridgeMan Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan5,
      src: FridgeMan5,
      alt: "FridgeMan Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan6,
      src: FridgeMan6,
      alt: "FridgeMan Screenshot #6",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan7,
      src: FridgeMan7,
      alt: "FridgeMan Screenshot #7",
    },
  ],
  jacksquared: [
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared1,
      src: JackSquared1,
      alt: "Jack Squared Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared2,
      src: JackSquared2,
      alt: "Jack Squared Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared3,
      src: JackSquared3,
      alt: "Jack Squared Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared4,
      src: JackSquared4,
      alt: "Jack Squared Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared5,
      src: JackSquared5,
      alt: "Jack Squared Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared6,
      src: JackSquared6,
      alt: "Jack Squared Screenshot #6",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared7,
      src: JackSquared7,
      alt: "Jack Squared Screenshot #7",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared8,
      src: JackSquared8,
      alt: "Jack Squared Screenshot #8",
    },
  ],
  jackspeppers: [
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers1,
      src: JacksPeppers1,
      alt: "JacksPeppers Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers2,
      src: JacksPeppers2,
      alt: "JacksPeppers Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers3,
      src: JacksPeppers3,
      alt: "JacksPeppers Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers4,
      src: JacksPeppers4,
      alt: "JacksPeppers Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers5,
      src: JacksPeppers5,
      alt: "JacksPeppers Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers6,
      src: JacksPeppers6,
      alt: "JacksPeppers Screenshot #6",
    },
  ],
  articles: {
    networking: {
      width: 2559,
      height: 1326,
      thumb: Networking,
      src: Networking,
      alt: "Networking article by Jack Kelly",
    },
    fullstack: {
      width: 2559,
      height: 1326,
      thumb: FullStackApplication,
      src: FullStackApplication,
      alt: "Full-stack web app article by Jack Kelly",
    },
  },
};
