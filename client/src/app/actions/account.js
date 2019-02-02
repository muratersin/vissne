import axios from 'axios';

import { SET_ACCOUNT_DETAIL } from '../constants/action-types';
import { toggleAlert, loading } from './common';

export const setAccountDetail = user => ({
  type: SET_ACCOUNT_DETAIL,
  payload: {
    user,
  },
});

export const getAccountDetail = () => (dispatch) => {
  dispatch(loading(true));
  axios.get('api/account')
    .then(({ data }) => {
      dispatch(loading(false));
      dispatch(setAccountDetail(data));
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
