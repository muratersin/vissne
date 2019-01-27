import { SET_ACCOUNT_DETAIL } from '../constants/action-types';
import { toggleAlert, loading } from './common';
import xhr from '../../lib/xhr';

export const setAccountDetail = user => ({
  type: SET_ACCOUNT_DETAIL,
  payload: {
    user,
  },
});

export const getAccountDetail = () => (dispatch) => {
  dispatch(loading(true));
  xhr({ url: 'account' })
    .then(({ user }) => {
      dispatch(loading(false));
      dispatch(setAccountDetail(user));
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
