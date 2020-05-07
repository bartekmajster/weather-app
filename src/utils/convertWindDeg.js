const convertWindDeg = (wind) => {
  if (wind >= 337 || wind < 22) {
    return 'Północny';
  } else if (wind >= 22 && wind < 67) {
    return 'Pn.-Wsch.';
  } else if (wind >= 67 && wind < 112) {
    return 'Wschodni';
  } else if (wind >= 112 && wind < 157) {
    return 'Pd.-Wsch.';
  } else if (wind >= 157 && wind < 202) {
    return 'Południowy';
  } else if (wind >= 202 && wind < 247) {
    return 'Pd.-Zach.';
  } else if (wind >= 247 && wind < 292) {
    return 'Zachodni';
  } else if (292 >= 22 && wind < 337) {
    return 'Pn.-Zach.';
  }
};

export default convertWindDeg;
