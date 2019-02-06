import axios from 'axios';

import { SET_MOVIES, SET_QUERY, SET_GENRES } from '../constants/action-types';
import { setLoadingStatus } from './common';
import ajaxErrorHandler from '../../lib/ajax-error-handler';

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
    dispatch(setLoadingStatus(true));
    axios.get(url)
      .then(({ data }) => {
        dispatch(setLoadingStatus(false));
        dispatch(setMovies(data));
      })
      .catch(ajaxErrorHandler(dispatch));
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
  .catch(ajaxErrorHandler(dispatch));
