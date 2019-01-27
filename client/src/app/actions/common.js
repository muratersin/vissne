
import axios from 'axios';

import { TOGGLE_ALERT, LOADING, TOGGLE_FILTER } from '../constants/action-types';

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

export const imageUpload = (image) => {
  axios
    .post(`${vissne.domain}/api/upload`, image, {
      onUploadProgress: (ProgressEvent) => {
        console.log((ProgressEvent.loaded / ProgressEvent.total * 100));
      },
    })
    .then((res) => {
      console.log(res.statusText);
    });
};
