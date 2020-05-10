import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const initialState = {
  data: [],
  chartsData: {
    chartsData: {
      maxRain: null,
      temp: [],
      pressure: [],
    },
  },
};

function addReducer(state = initialState, action) {
  const rain = [];
  const temp = [];
  const pressure = [];
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      action.data.data.data.forEach((item) => rain.push(item.precip));
      action.data.data.data.forEach((item) => temp.push({ pv: item.temp.toFixed() }));
      action.data.data.data.forEach((item) => pressure.push({ pv: item.pres.toFixed() - 1000 }));
      return {
        ...state,
        data: action.data.data.data,
        chartsData: {
          maxRain: Math.max(...rain),
          temp,
          pressure,
        },
      };
    case FETCH_DATA_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export default addReducer;
