import { SET_MOVIES, SET_QUERY, SET_GENRES } from './ActionTypes';
import { toggleAlert, loading } from './CommonActions';
import xhr from '../../lib/xhr';

export const setMovies = response => ({
  type: SET_MOVIES,
  movies: response.results,
  page: (response.page + 1),
  totalPages: response.total_pages,
  total: response.total_results,
});

export const getMovies = (query) => {
  let url = 'discover';

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
    xhr({ url })
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
