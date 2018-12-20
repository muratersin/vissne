
const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  loading: false,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE_ALERT': {
      return Object.assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind,
      });
    }

    case 'PAGE_LOADING': {
      return Object.assign({}, state, {
        loading: state.loading,
      });
    }

    default:
      return state;
  }
}
