const convertDay = (day) => {
  switch (day) {
    case 1:
      return 'Poniedziałek';
    case 2:
      return 'Wtorek';
    case 3:
      return 'Środa';
    case 4:
      return 'Czwartek';
    case 5:
      return 'Piątek';
    case 6:
      return 'Sobota';
    case 7:
      return 'Niedziela';
    default:
      return null;
  }
};

export default convertDay;
