import {
  TOGGLE_ALERT,
  SET_PAGE_LOADING_STATUS,
  SET_LOADING_STATUS,
  TOGGLE_FILTER,
  SET_UPLOADED_IMAGE,
} from '../constants/action-types';

export const toggleAlert = ({ message, kind }) => ({
  type: TOGGLE_ALERT,
  message,
  kind,
});

export const setPageLoadingStatus = status => ({
  type: SET_PAGE_LOADING_STATUS,
  pageLoading: status,
});

export const setLoadingStatus = status => ({
  type: SET_LOADING_STATUS,
  loading: status,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const setUploadedImage = uploadedFile => ({
  type: SET_UPLOADED_IMAGE,
  payload: uploadedFile,
});
