const convertWindSpeed = (speed) => {
  if (speed === 0) {
    return 'Brak';
  } else if (speed > 0 && speed < 12) {
    return 'Słaby';
  } else if (speed >= 12 && speed < 20) {
    return 'Łagodny';
  } else if (speed >= 20 && speed < 40) {
    return 'Umiar.';
  } else if (speed >= 40 && speed < 55) {
    return 'Silny';
  } else if (speed >= 55 && speed < 65) {
    return 'B.silny';
  } else if (speed >= 65 && speed < 85) {
    return 'Wichura';
  } else if (speed >= 85 && speed < 95) {
    return 'Silna Wichura';
  } else if (speed >= 95 && speed < 105) {
    return 'B.Silna Wichura';
  } else if (speed >= 105 && speed < 125) {
    return 'Gwał. Wichura';
  } else if (speed >= 125) {
    return 'Huragan';
  } else {
    return null;
  }
};

export default convertWindSpeed;
