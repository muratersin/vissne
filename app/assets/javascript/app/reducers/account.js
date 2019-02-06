import { SET_ACCOUNT_DETAIL } from '../constants/action-types';

const initialState = {
  user: {},
};

export default function account(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        user: action.payload.user,
      });

    default:
      return state;
  }
}
