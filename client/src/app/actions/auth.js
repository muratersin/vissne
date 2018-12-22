import { AUTH_SUCCESS } from './action-types';
import { toggleAlert } from './common';
import xhr from '../../lib/xhr';

export function authSuccess(user) {
  return {
    type: AUTH_SUCCESS,
    user,
  };
}

export function register(data) {
  const ops = {
    url: 'register',
    method: 'POST',
    data,
  };

  return dispatch => xhr(ops)
    .then(() => {
      window.location.reload();
    })
    .catch(({ message }) => dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    ));
}

export function login(data) {
  const ops = {
    url: 'login',
    method: 'POST',
    data,
  };

  return dispatch => xhr(ops)
    .then(() => {
      window.location.reload();
    })
    .catch(({ message }) => dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    ));
}
