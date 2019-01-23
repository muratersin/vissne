import { SET_MOVIE_DETAIL } from '../constants/action-types';

const initialState = {
  detail: null,
};

export default function detail(state = initialState, action) {
  switch (action.type) {
    case SET_MOVIE_DETAIL:
      return Object.assign({}, state, {
        detail: action.detail,
      });

    default:
      return state;
  }
}
