import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

const initialState = {
  data: [],
  maxRain: 0,
};

function addReducer(state = initialState, action) {
  const rain = [];
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      action.data.data.data.forEach((item) => rain.push(item.precip));
      return { ...state, data: action.data.data.data, maxRain: Math.max(...rain) };
    case FETCH_DATA_FAILURE:
      return { ...state };
    default:
      return state;
  }
}

export default addReducer;
