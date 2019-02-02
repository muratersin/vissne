import axios from 'axios';

import { SET_MOVIES, SET_QUERY, SET_GENRES } from '../constants/action-types';
import { toggleAlert, loading } from './common';

export const setMovies = response => ({
  type: SET_MOVIES,
  movies: response.results,
  page: (response.page + 1),
  totalPages: response.total_pages,
  total: response.total_results,
});

export const getMovies = (query) => {
  let url = 'api/discover';

  Object.keys(query).forEach((queryName, i) => {
    const value = query[queryName];
    const op = i === 0
      ? '?'
      : '&';

    if (value) {
      if (!Array.isArray(value)) {
        url += `${op}${queryName}=${value}`;
      } else if (value.length > 0) {
        let multiQuery = `${queryName}=`;
        value.forEach((v) => {
          multiQuery += `${v},`;
        });
        url += `${op}${multiQuery}`;
      }
    }
  });

  return (dispatch) => {
    dispatch(loading(true));
    axios.get(url)
      .then(({ data }) => {
        dispatch(loading(false));
        dispatch(setMovies(data));
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

export const setQuery = ({ field, value }) => (dispatch) => {
  dispatch({
    type: SET_QUERY,
    field,
    value,
  });
  return Promise.resolve();
};

export const setGenres = genres => ({
  type: SET_GENRES,
  genres,
});

export const getGenres = () => dispatch => axios
  .get('/api/genre')
  .then(({ data }) => dispatch(setGenres(data)))
  .catch(({ message }) => {
    dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    );
  });
