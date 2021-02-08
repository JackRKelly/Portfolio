//FridgeMan
import FridgeMan1 from "../assets/images/fridgeman/Screenshot_1.png";
import FridgeMan2 from "../assets/images/fridgeman/Screenshot_2.png";
import FridgeMan3 from "../assets/images/fridgeman/Screenshot_3.png";
import FridgeMan4 from "../assets/images/fridgeman/Screenshot_4.png";
import FridgeMan5 from "../assets/images/fridgeman/Screenshot_5.png";
import FridgeMan6 from "../assets/images/fridgeman/Screenshot_6.png";
import FridgeMan7 from "../assets/images/fridgeman/Screenshot_7.png";
import FridgeMan1Thumb from "../assets/images/fridgeman/Screenshot_1-thumb.png";
import FridgeMan2Thumb from "../assets/images/fridgeman/Screenshot_2-thumb.png";
import FridgeMan3Thumb from "../assets/images/fridgeman/Screenshot_3-thumb.png";
import FridgeMan4Thumb from "../assets/images/fridgeman/Screenshot_4-thumb.png";
import FridgeMan5Thumb from "../assets/images/fridgeman/Screenshot_5-thumb.png";
import FridgeMan6Thumb from "../assets/images/fridgeman/Screenshot_6-thumb.png";
import FridgeMan7Thumb from "../assets/images/fridgeman/Screenshot_7-thumb.png";
//JackSquared
import JackSquared1 from "../assets/images/jacksquared/Screenshot_1.png";
import JackSquared2 from "../assets/images/jacksquared/Screenshot_2.png";
import JackSquared3 from "../assets/images/jacksquared/Screenshot_3.png";
import JackSquared4 from "../assets/images/jacksquared/Screenshot_4.png";
import JackSquared5 from "../assets/images/jacksquared/Screenshot_5.png";
import JackSquared6 from "../assets/images/jacksquared/Screenshot_6.png";
import JackSquared7 from "../assets/images/jacksquared/Screenshot_7.png";
import JackSquared8 from "../assets/images/jacksquared/Screenshot_8.png";
import JackSquared1Thumb from "../assets/images/jacksquared/Screenshot_1-thumb.png";
import JackSquared2Thumb from "../assets/images/jacksquared/Screenshot_2-thumb.png";
import JackSquared3Thumb from "../assets/images/jacksquared/Screenshot_3-thumb.png";
import JackSquared4Thumb from "../assets/images/jacksquared/Screenshot_4-thumb.png";
import JackSquared5Thumb from "../assets/images/jacksquared/Screenshot_5-thumb.png";
import JackSquared6Thumb from "../assets/images/jacksquared/Screenshot_6-thumb.png";
import JackSquared7Thumb from "../assets/images/jacksquared/Screenshot_7-thumb.png";
import JackSquared8Thumb from "../assets/images/jacksquared/Screenshot_8-thumb.png";
//Jacks Peppers
import JacksPeppers1 from "../assets/images/jackspeppers/Screenshot_1.png";
import JacksPeppers2 from "../assets/images/jackspeppers/Screenshot_2.png";
import JacksPeppers3 from "../assets/images/jackspeppers/Screenshot_3.png";
import JacksPeppers4 from "../assets/images/jackspeppers/Screenshot_4.png";
import JacksPeppers5 from "../assets/images/jackspeppers/Screenshot_5.png";
import JacksPeppers6 from "../assets/images/jackspeppers/Screenshot_6.png";
import JacksPeppers1Thumb from "../assets/images/jackspeppers/Screenshot_1-thumb.png";
import JacksPeppers2Thumb from "../assets/images/jackspeppers/Screenshot_2-thumb.png";
import JacksPeppers3Thumb from "../assets/images/jackspeppers/Screenshot_3-thumb.png";
import JacksPeppers4Thumb from "../assets/images/jackspeppers/Screenshot_4-thumb.png";
import JacksPeppers5Thumb from "../assets/images/jackspeppers/Screenshot_5-thumb.png";
import JacksPeppers6Thumb from "../assets/images/jackspeppers/Screenshot_6-thumb.png";
//Jacks Peppers
import RailsRecipe1 from "../assets/images/railsrecipe/Screenshot_1.png";
import RailsRecipe2 from "../assets/images/railsrecipe/Screenshot_2.png";
import RailsRecipe3 from "../assets/images/railsrecipe/Screenshot_3.png";
import RailsRecipe4 from "../assets/images/railsrecipe/Screenshot_4.png";
import RailsRecipe5 from "../assets/images/railsrecipe/Screenshot_5.png";
import RailsRecipe6 from "../assets/images/railsrecipe/Screenshot_6.png";
import RailsRecipe1Thumb from "../assets/images/railsrecipe/Screenshot_1-thumb.png";
import RailsRecipe2Thumb from "../assets/images/railsrecipe/Screenshot_2-thumb.png";
import RailsRecipe3Thumb from "../assets/images/railsrecipe/Screenshot_3-thumb.png";
import RailsRecipe4Thumb from "../assets/images/railsrecipe/Screenshot_4-thumb.png";
import RailsRecipe5Thumb from "../assets/images/railsrecipe/Screenshot_5-thumb.png";
import RailsRecipe6Thumb from "../assets/images/railsrecipe/Screenshot_6-thumb.png";

//Articles
import FullStackApplication from "../assets/images/articles/full-stack.jpg";
import Networking from "../assets/images/articles/networking.jpg";
import FullStackApplicationThumb from "../assets/images/articles/full-stack-thumb.png";
import NetworkingThumb from "../assets/images/articles/networking-thumb.png";

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
  railsrecipe: Image[];
  articles: {
    networking: Image;
    fullstack: Image;
  };
} = {
  fridgeman: [
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan1Thumb,
      src: FridgeMan1,
      alt: "FridgeMan Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan2Thumb,
      src: FridgeMan2,
      alt: "FridgeMan Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan3Thumb,
      src: FridgeMan3,
      alt: "FridgeMan Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan4Thumb,
      src: FridgeMan4,
      alt: "FridgeMan Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan5Thumb,
      src: FridgeMan5,
      alt: "FridgeMan Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan6Thumb,
      src: FridgeMan6,
      alt: "FridgeMan Screenshot #6",
    },
    {
      width: 2559,
      height: 1326,
      thumb: FridgeMan7Thumb,
      src: FridgeMan7,
      alt: "FridgeMan Screenshot #7",
    },
  ],
  jacksquared: [
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared1Thumb,
      src: JackSquared1,
      alt: "Jack Squared Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared2Thumb,
      src: JackSquared2,
      alt: "Jack Squared Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared3Thumb,
      src: JackSquared3,
      alt: "Jack Squared Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared4Thumb,
      src: JackSquared4,
      alt: "Jack Squared Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared5Thumb,
      src: JackSquared5,
      alt: "Jack Squared Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared6Thumb,
      src: JackSquared6,
      alt: "Jack Squared Screenshot #6",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared7Thumb,
      src: JackSquared7,
      alt: "Jack Squared Screenshot #7",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JackSquared8Thumb,
      src: JackSquared8,
      alt: "Jack Squared Screenshot #8",
    },
  ],
  jackspeppers: [
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers1Thumb,
      src: JacksPeppers1,
      alt: "JacksPeppers Screenshot #1",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers2Thumb,
      src: JacksPeppers2,
      alt: "JacksPeppers Screenshot #2",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers3Thumb,
      src: JacksPeppers3,
      alt: "JacksPeppers Screenshot #3",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers4Thumb,
      src: JacksPeppers4,
      alt: "JacksPeppers Screenshot #4",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers5Thumb,
      src: JacksPeppers5,
      alt: "JacksPeppers Screenshot #5",
    },
    {
      width: 2559,
      height: 1326,
      thumb: JacksPeppers6Thumb,
      src: JacksPeppers6,
      alt: "JacksPeppers Screenshot #6",
    },
  ],
  railsrecipe: [
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe1Thumb,
      src: RailsRecipe1,
      alt: "RailsRecipe Screenshot #1",
    },
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe2Thumb,
      src: RailsRecipe2,
      alt: "RailsRecipe Screenshot #2",
    },
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe3Thumb,
      src: RailsRecipe3,
      alt: "RailsRecipe Screenshot #3",
    },
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe4Thumb,
      src: RailsRecipe4,
      alt: "RailsRecipe Screenshot #4",
    },
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe5Thumb,
      src: RailsRecipe5,
      alt: "RailsRecipe Screenshot #5",
    },
    {
      width: 3360,
      height: 1878,
      thumb: RailsRecipe6Thumb,
      src: RailsRecipe6,
      alt: "RailsRecipe Screenshot #6",
    },
  ],
  articles: {
    networking: {
      width: 2559,
      height: 1326,
      thumb: NetworkingThumb,
      src: Networking,
      alt: "Networking article by Jack Kelly",
    },
    fullstack: {
      width: 2559,
      height: 1326,
      thumb: FullStackApplicationThumb,
      src: FullStackApplication,
      alt: "Full-stack web app article by Jack Kelly",
    },
  },
};
