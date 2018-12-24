import { TOGGLE_ALERT } from '../actions/action-types';

const { assign } = Object;
const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALERT: {
      return assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind,
      });
    }

    default:
      return state;
  }
}
