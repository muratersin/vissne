import axios from 'axios';

import cookie from '../../lib/cookie';
import ajaxErrorHandler from '../../lib/ajax-error-handler';
import {
  GET_LISTS_BY_CURRENT_USER,
  CREATE_LIST,
  DELETE_LIST,
  ADD_TO_LIST,
  DELETE_FROM_LIST,
  SET_LISTS,
} from '../constants/action-types';
import { setLoadingStatus, setPageLoadingStatus, toggleAlertDialog } from './common';

export function setList(lists) {
  return {
    type: SET_LISTS,
    payload: lists,
  };
}

export function getListByCurrentUser({ page, limit }) {
  const currentUserId = cookie.get('user_id');

  if (!currentUserId) {
    window.location.href = `${vissne.domain}/auth`;
  }

  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios(`/api/lists?userId=${currentUserId}&page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch(setLoadingStatus(true));
        dispatch(setPageLoadingStatus(false));
        dispatch(setList(response.data));
      })
      .catch(ajaxErrorHandler);
  };
}

export function createList(list) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.post('/api/lists', list)
      .then((result) => {
        dispatch(setLoadingStatus(false));
        dispatch(toggleAlertDialog({
          kind: 'success',
          message: result.data.message,
        }));
      })
      .catch(ajaxErrorHandler);
  };
}

export function deleteList(id) {

}

export function addToList(listId, movieId) {

}

export function removeFromList(listId, movieId) {

}
