import { SET_ACCOUNT_DETAIL } from '../../common/ActionTypes';

const initialState = {};

export default function account(state = initialState, action) {
  switch (action.type) {
    case SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        account: action.account,
      });

    default:
      return state;
  }
}
