import {
  TOGGLE_ALERT,
  SET_PAGE_LOADING_STATUS,
  SET_LOADING_STATUS,
  TOGGLE_FILTER,
  SET_UPLOADED_IMAGE,
} from '../constants/action-types';

const initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  pageLoading: true,
  loading: false,
  showFilter: true,
};

export default function common(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ALERT:
      return Object.assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind,
      });

    case SET_PAGE_LOADING_STATUS:
      return Object.assign({}, state, {
        pageLoading: action.pageLoading,
      });

    case SET_LOADING_STATUS:
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
