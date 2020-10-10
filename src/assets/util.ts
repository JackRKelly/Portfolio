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
