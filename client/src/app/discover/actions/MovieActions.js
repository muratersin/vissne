import xhr from '../../../lib/xhr';
import { SET_MOVIE_DETAIL } from '../../common/ActionTypes';
import { toggleAlert } from '../../common/CommonActions';

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
