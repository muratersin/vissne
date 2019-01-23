import { SET_ACCOUNT_DETAIL } from '../constants/action-types';
import { toggleAlert, loading } from './common';
import xhr from '../../lib/xhr';

export const setAccountDetail = account => ({
  type: SET_ACCOUNT_DETAIL,
  account,
});

export const getAccountDetail = () => (dispatch) => {
  dispatch(loading(true));
  xhr({ url: 'account ' })
    .then((account) => {
      dispatch(loading(false));
      dispatch(setAccountDetail(account));
    })
    .catch(({ message }) => {
      dispatch(loading(true));
      dispatch(
        toggleAlert({
          kind: 'danger',
          message,
        }),
      );
    });
};
