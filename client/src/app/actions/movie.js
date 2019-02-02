import axios from 'axios';

import { SET_MOVIE_DETAIL } from '../constants/action-types';
import { toggleAlert } from './common';

export const setMovieDetail = detail => ({
  type: SET_MOVIE_DETAIL,
  detail,
});

export const getMovieDetail = id => (dispatch) => {
  dispatch(setMovieDetail(null));

  axios.get(`/api/movie/${id}`)
    .then(({ data }) => dispatch(
      setMovieDetail(data),
    ))
    .catch(({ message }) => dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    ));
};
