import { SET_MOVIES, SET_GENRES, SET_QUERY } from '../../common/ActionTypes';
import cookie from '../../../lib/cookie';

const userFirstName = cookie.get('user_first_name');
const userLastName = cookie.get('user_last_name');
const userEmail = cookie.get('user_email');
const userId = cookie.get('user_id');

const initialState = {
  genres: [],
  movies: [],
  total: 0,
  totalPage: 1,
  query: {
    page: 1,
    sortBy: 'popularity.decs',
    searchText: null,
    withGenres: [],
    year: null,
    crews: [],
    casts: [],
  },
  isLoggedIn: !!userEmail,
  user: {
    id: userId,
    fristName: userFirstName,
    lastName: userLastName,
    email: userEmail,
    fullName: `${userFirstName} ${userLastName}`,
  },
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
