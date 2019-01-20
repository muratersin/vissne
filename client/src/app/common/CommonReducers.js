import { TOGGLE_ALERT, LOADING } from './ActionTypes';

const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  loading: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALERT: {
      return Object.assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind,
      });
    }

    case LOADING:
      return Object.assign({}, state, {
        loading: action.loading,
      });

    default:
      return state;
  }
}
