import axios from 'axios';

import { SET_ACCOUNT_DETAIL } from '../constants/action-types';
import { setPageLoadingStatus, setLoadingStatus, toggleAlert } from './common';
import ajaxErrorHandler from '../../lib/ajax-error-handler';

export const setAccountDetail = user => ({
  type: SET_ACCOUNT_DETAIL,
  payload: {
    user,
  },
});

export const getAccountDetail = () => (dispatch) => {
  dispatch(setPageLoadingStatus(true));
  axios.get('/api/account')
    .then((response) => {
      dispatch(setPageLoadingStatus(false));
      dispatch(setAccountDetail(response.data));
    })
    .catch(ajaxErrorHandler(dispatch));
};

export const updateUser = user => (dispatch) => {
  dispatch(setLoadingStatus(true));
  axios.put(`/api/user/${user.id}`, user)
    .then((response) => {
      dispatch(setLoadingStatus(false));
      dispatch(setAccountDetail(response.data));
      dispatch(toggleAlert({
        kind: 'success',
        message: 'Profile has been successfully updated.',
      }));
    })
    .catch(ajaxErrorHandler(dispatch));
};

export const changePassword = password => (dispatch) => {
  dispatch(setLoadingStatus(true));
  axios.put('/api/user/change-password', password)
    .then(({ data }) => {
      dispatch(setLoadingStatus(false));
      dispatch(toggleAlert({
        kind: 'success',
        message: data.message,
      }));
    })
    .catch(ajaxErrorHandler(dispatch));
};
