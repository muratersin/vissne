import { SET_LISTS, SET_LIST_MOVIES } from '../constants/action-types';

const initialState = {
  lists: [],
  totalList: 0,
  movies: [],
  totalMovie: 0,
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload.lists,
        totalList: action.payload.total,
      });

    case SET_LIST_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload.movies,
        totalMovie: action.payload.total,
      });

    default:
      return state;
  }
}
