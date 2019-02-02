import axios from 'axios';

import { loading, toggleAlert } from './common';

export const loginRegister = (data, url) => (dispatch) => {
  dispatch(loading(true));
  axios.post(url, data).then(() => {
    window.location.href = '/';
    // TODO: set user information to common state
  }).catch(({ message }) => {
    dispatch(loading(true));
    dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    );
  });
};

export const logout = () => {

};
