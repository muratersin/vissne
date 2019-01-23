// import { SET_USER } from '../constants/action-types';
import { loading, toggleAlert } from './common';
import xhr from '../../lib/xhr';

export const loginRegister = (data, url) => (dispatch) => {
  dispatch(loading(true));
  xhr({
    url,
    data,
    method: 'POST',
  }).then(() => {
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
