import { SET_MOVIES, SET_FILTER, SET_GENRES } from './ActionTypes';
import { toggleAlert, loading } from './CommonActions';
import xhr from '../../lib/xhr';

export const setMovies = response => ({
  type: SET_MOVIES,
  movies: response.results,
  page: (response.page + 1),
  totalPages: response.total_pages,
  total: response.total_results,
});

export const getMovies = (page = 1, filter) => {
  const ops = {
    url: `discover?page=${page}`,
  };

  if (filter) {
    if (filter.sort) {
      ops.url += `&sort_by=${filter.sort}`;
    }
  }

  return (dispatch) => {
    dispatch(loading(true));
    xhr(ops)
      .then((response) => {
        dispatch(loading(false));
        dispatch(setMovies(response));
      })
      .catch(({ message }) => {
        dispatch(loading(true));
        dispatch(
          toggleAlert({
            kind: 'danger',
            message,
          }),
        );
      });
  };
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});

export const setGenres = genres => ({
  type: SET_GENRES,
  genres,
});

export const getGenres = () => {
  const ops = {
    url: 'genre',
  };

  return dispatch => xhr(ops)
    .then(response => dispatch(setGenres(response)))
    .catch(({ message }) => {
      dispatch(
        toggleAlert({
          kind: 'danger',
          message,
        }),
      );
    });
};
