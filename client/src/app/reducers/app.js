import { SET_MOVIES, SET_FILTER, SET_GENRES } from '../actions/action-types';
import cookie from '../../lib/cookie';

const userFirstName = cookie.get('user_first_name');
const userLastName = cookie.get('user_last_name');
const userEmail = cookie.get('user_email');
const userId = cookie.get('user_id');

const initialState = {
  genres: [],
  movies: [],
  page: 1,
  total: 0,
  totalPage: 1,
  filter: {
    sort: null,
    searchText: null,
    genres: [],
    crews: [],
    casts: [],
    voteAverage: {
      lte: null,
      gte: null,
    },
    releaseYear: {
      lte: null,
      gte: null,
    },
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
        page: action.page,
        total: action.total,
        totalPages: action.totalPages,
      });

    case SET_FILTER:
      return Object.assign({}, state, {
        filter: action.filter,
      });

    case SET_GENRES:
      return Object.assign({}, state, {
        genres: action.genres,
      });

    default:
      return state;
  }
}
