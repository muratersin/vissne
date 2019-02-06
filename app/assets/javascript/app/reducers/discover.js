import { SET_MOVIES, SET_GENRES, SET_QUERY } from '../constants/action-types';
import cookie from '../../lib/cookie';

const user = {
  id: cookie.get('user_id'),
  userName: cookie.get('username'),
  fristName: cookie.get('user_first_name'),
  lastName: cookie.get('user_last_name'),
  email: cookie.get('user_email'),
};

const initialState = {
  user,
  genres: [],
  movies: [],
  total: 0,
  totalPage: 1,
  query: {
    page: 1,
    sortBy: 'popularity.decs',
    filter: null,
    searchText: null,
    withGenres: [],
    year: null,
    crews: [],
    casts: [],
  },
  isLoggedIn: !!user.email,
};

export default function app(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.movies),
        total: action.total,
        totalPages: action.totalPages,
        query: Object.assign({}, state.query, {
          page: action.page,
        }),
      });

    case SET_GENRES:
      return Object.assign({}, state, {
        genres: action.genres,
      });

    case SET_QUERY:
      return Object.assign({}, state, {
        movies: [],
        query: Object.assign({}, state.query, {
          page: 1,
          [action.field]: action.value,
        }),
      });

    default:
      return state;
  }
}

// TODO: Move user object to account reducer
