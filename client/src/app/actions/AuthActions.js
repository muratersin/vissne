import { toggleAlert, loading } from './CommonActions';
import xhr from '../../lib/xhr';

export function register(data) {
  const ops = {
    url: 'register',
    method: 'POST',
    data,
  };

  return (dispatch) => {
    dispatch(loading(true));
    xhr(ops)
      .then(() => {
        window.location.reload();
      })
      .catch(({ message }) => {
        dispatch(loading(false));
        dispatch(
          toggleAlert({
            kind: 'danger',
            message,
          }),
        );
      });
  };
}

export function login(data) {
  const ops = {
    url: 'login',
    method: 'POST',
    data,
  };

  return (dispatch) => {
    dispatch(loading(true));
    xhr(ops)
      .then(() => {
        window.location.reload();
      })
      .catch(({ message }) => {
        dispatch(loading(false));
        dispatch(
          toggleAlert({
            kind: 'danger',
            message,
          }),
        );
      });
  };
}

export function loginWithFacebook() {
  return (dispatch) => {
    dispatch(loading(true));
    FB.login((response) => {
      if (response.status === 'connected') {
        const ops = {
          url: 'auth/facebook',
          method: 'POST',
          data: response,
        };

        xhr(ops)
          .then(() => {
            window.location.reload();
          })
          .catch(({ message }) => {
            dispatch(loading(false));
            dispatch(
              toggleAlert({
                kind: 'danger',
                message,
              }),
            );
          });
      } else {
        dispatch(toggleAlert({
          kind: 'Error',
          message: 'User cancelled login or did not fully authorize.',
        }));
      }
    }, { scope: 'public_profile,email' });
  };
}
