import axios from 'axios';

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

export const uploadImage = image => (dispatch) => {
  axios.post(`${vissne.domain}/api/upload`, image, {
    onUploadProgress: (ProgressEvent) => {
      console.log((ProgressEvent.loaded / ProgressEvent.total * 100));
    },
  }).then((res) => {
    dispatch(setUploadedImage(res.data));
  });
};
