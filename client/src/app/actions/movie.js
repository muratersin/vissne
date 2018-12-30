import { SET_MOVIE_DETAIL } from './action-types';
import xhr from '../../lib/xhr';
import { toggleAlert } from './common';

export const setMovieDetail = detail => ({
  type: SET_MOVIE_DETAIL,
  detail,
});

export const getMovieDetail = (id) => {
  const ops = {
    url: `movie/${id}`,
    method: 'GET',
  };

  return (dispatch) => {
    dispatch(setMovieDetail(null));

    xhr(ops)
      .then(response => dispatch(
        setMovieDetail(response),
      ))
      .catch(({ message }) => dispatch(
        toggleAlert({
          kind: 'danger',
          message,
        }),
      ));
  };
};
