import {
  TOGGLE_ALERT,
  LOADING,
  TOGGLE_FILTER,
  SET_UPLOADED_IMAGE,
} from '../constants/action-types';

const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  loading: true,
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
        showFilter: !state.showFilter,
      });

    case SET_UPLOADED_IMAGE:
      return Object.assign({}, state, {
        uploadedAvatar: action.payload,
      });

    default:
      return state;
  }
}
