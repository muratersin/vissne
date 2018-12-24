import { SET_MOVIES, SET_FILTER } from '../actions/action-types';

const initialState = {
  genres: [],
  movies: [],
  page: 1,
  total: 0,
  totalPage: 1,
  filter: {},
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
