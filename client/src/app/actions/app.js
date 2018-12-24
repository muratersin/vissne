import { SET_MOVIES, SET_FILTER } from './action-types';
import { toggleAlert } from './common';
import xhr from '../../lib/xhr';

export const setMovies = response => ({
  type: SET_MOVIES,
  movies: response.results,
  page: response.page,
  totalPages: response.total_pages,
  total: response.total_results,
});

export const getMovies = (filter) => {
  const ops = {
    url: `discover?page=${filter.page || 1}`,
  };

  if (filter.sort) {
    ops.url += `&sort_by=${filter.sort}`;
  }

  return dispatch => xhr(ops)
    .then(response => dispatch(
      setMovies(response),
    ))
    .catch(({ message }) => dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    ));
};

export const setFilter = filter => ({
  type: SET_FILTER,
  filter,
});
