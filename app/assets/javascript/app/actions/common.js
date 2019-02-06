import {
  TOGGLE_ALERT,
  LOADING,
  TOGGLE_FILTER,
  SET_UPLOADED_IMAGE,
} from '../constants/action-types';

export const toggleAlert = ({ message, kind }) => ({
  type: TOGGLE_ALERT,
  message,
  kind,
});

export const loading = status => ({
  type: LOADING,
  loading: status,
});

export const toggleFilter = () => ({
  type: TOGGLE_FILTER,
});

export const setUploadedImage = uploadedFile => ({
  type: SET_UPLOADED_IMAGE,
  payload: uploadedFile,
});
