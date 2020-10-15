export default interface ModalDetails {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  live?: string;
  images: Array<string>;
  thumbnail: string;
  primaryColor?: string;
  checkCurrentRef: () => void;
  viewport: number;
  onModalOpen: () => void;
  onModalClose: () => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImageModalList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const splitDescription = (description: string) => {
  let final = {
    split: description.split(" "),
    getSlice: function () {
      return this.split.slice(0, 35).join(" ");
    },
    getEnd: function () {
      return this.split.length > 35 ? "..." : "";
    },
  };

  return `${final.getSlice()}${final.getEnd()}`;
};
