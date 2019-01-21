import { TOGGLE_ALERT, LOADING, TOGGLE_FILTER } from './ActionTypes';

const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  loading: false,
  showFilter: true,
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

    case TOGGLE_FILTER:
      return Object.assign({}, state, {
        showFilter: action.showFilter,
      });

    default:
      return state;
  }
}
