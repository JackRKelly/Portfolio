export interface ModalDetails {
  description: string;
  tags: Array<string>;
  title: string;
  github?: string;
  preview?: string;
  live?: string;
  images: Array<string>;
  thumbnail: string;
  primaryColor?: string;
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

export const calc = (x: number, y: number) => [
  x - window.innerWidth / 2,
  y - window.innerHeight / 2,
];

export const zIndexSwitch = (index) => {
  switch (index) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 2;
    case 4:
      return 1;
  }
};

export const scaleSwitch = (index) => {
  switch (index) {
    case 0:
      return 0.5;
    case 1:
      return 0.75;
    case 2:
      return 1;
    case 3:
      return 0.75;
    case 4:
      return 0.5;
  }
};

export const opacitySwitch = (index) => {
  switch (index) {
    case 0:
      return 0;
    case 1:
      return 0.8;
    case 2:
      return 1;
    case 3:
      return 0.8;
    case 4:
      return 0;
  }
};

export const transitionSwitch = (index) => {
  switch (index) {
    case 0:
      return 200;
    case 4:
      return 200;
    default:
      return 450;
  }
};

export const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export const isInViewport = (el) => {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) + 400 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const calcPercent = () => {
  let h = document.documentElement,
    b = document.body,
    st = "scrollTop",
    sh = "scrollHeight";

  return ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
};

export const onModalOpen = () => {
  const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
  const body = document.body;
  setTimeout(() => {
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  }, 200);
};

export const onModalClose = () => {
  const body = document.body;
  const scrollY = body.style.top;
  body.style.position = "";
  body.style.top = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};