import { SET_MOVIES, SET_FILTER } from '../actions/action-types';
import cookie from '../../lib/cookie';

const userFirstName = cookie.get('user_first_name');
const userLastName = cookie.get('user_last_name');
const userEmail = cookie.get('user_email');

const initialState = {
  genres: [],
  movies: [],
  page: 1,
  total: 0,
  totalPage: 1,
  filter: {},
  isLoggedIn: !!userEmail,
  user: {
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

    default:
      return state;
  }
}
