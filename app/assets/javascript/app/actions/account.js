import axios from 'axios';

import { SET_ACCOUNT_DETAIL } from '../constants/action-types';
import { loading } from './common';
import ajaxErrorHandler from '../../lib/ajax-error-handler';

export const setAccountDetail = user => ({
  type: SET_ACCOUNT_DETAIL,
  payload: {
    user,
  },
});

export const getAccountDetail = () => (dispatch) => {
  dispatch(loading(true));
  axios.get('/api/account')
    .then((response) => {
      dispatch(loading(false));
      dispatch(setAccountDetail(response.data.user));
    })
    .catch(ajaxErrorHandler(dispatch));
};

export const changePassword = password => (dispatch) => {

};
