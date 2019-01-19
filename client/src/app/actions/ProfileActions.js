import xhr from '../../lib/xhr';
import { toggleAlert } from './CommonActions';
import {
  UPDATE_PROFILE,
  SET_PROFILE_DETAIL,
} from './ActionTypes';

export const setProfileDetail = detail => ({
  type: SET_PROFILE_DETAIL,
  lists: detail.lists,
});

export const getProfileDetail = () => (dispatch) => {
  xhr({ url: 'profile' })
    .then(response => dispatch(
      setProfileDetail(response),
    ))
    .catch(({ message }) => dispatch(
      toggleAlert({
        kind: 'danger',
        message,
      }),
    ));
}
