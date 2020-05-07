import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchedDataAction = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  if (!window.localStorage.getItem('data')) {
    return axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/hourly?city=BANDARSERIBEGAWAN&key=229c1a19b8f5472f8f8757943350dc88&hours=48`,
      )
      .then((payload) => {
        window.localStorage.setItem('data', JSON.stringify(payload));
        dispatch({ type: FETCH_DATA_SUCCESS, payload });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_DATA_FAILURE });
      });
  }
  const data = JSON.parse(window.localStorage.getItem('data'));

  return dispatch({ type: FETCH_DATA_SUCCESS, data });
};
