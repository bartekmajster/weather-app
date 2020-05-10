import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchedDataAction = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });

  return axios
    .get(
      `https://api.weatherbit.io/v2.0/forecast/hourly?city=Kraków&key=${process.env.REACT_APP_API_KEY}&hours=48`,
    )
    .then((payload) => {
      dispatch({ type: FETCH_DATA_SUCCESS, payload });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_DATA_FAILURE });
    });
};
