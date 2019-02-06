import axios from 'axios';

import { setPageLoadingStatus } from './common';
import ajaxErrorHandler from '../../lib/ajax-error-handler';

export const loginRegister = (data, url) => (dispatch) => {
  dispatch(setPageLoadingStatus(true));
  axios.post(url, data).then(() => {
    window.location.href = '/';
    // TODO: set user information to common state
  }).catch(ajaxErrorHandler(dispatch));
};

export const logout = () => {

};
