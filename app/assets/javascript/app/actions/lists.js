import axios from 'axios';

import cookie from '../../lib/cookie';
import ajaxErrorHandler from '../../lib/ajax-error-handler';
import { SET_LIST_MOVIES, SET_LISTS } from '../constants/action-types';
import { setLoadingStatus, setPageLoadingStatus, toggleAlertDialog } from './common';

export function setList({ lists, total }) {
  return {
    type: SET_LISTS,
    payload: {
      lists,
      total,
    },
  };
}

export function getListByCurrentUser({ page, limit }, movieId) {
  const currentUserId = cookie.get('user_id');

  if (!currentUserId) {
    return ({
      type: SET_LISTS,
      payload: {
        lists: [],
        total: 0,
      },
    });
  }

  let url = `/api/lists?userId=${currentUserId}&page=${page}&limit=${limit}`;

  if (movieId) {
    url += `&movieId=${movieId}`;
  }

  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios(url)
      .then((response) => {
        dispatch(setLoadingStatus(true));
        dispatch(setPageLoadingStatus(false));
        dispatch(setList({
          lists: response.data.rows,
          total: response.data.count,
        }));
      })
      .catch(ajaxErrorHandler(dispatch));
  };
}

export function saveList(list, callback) {
  const ops = !list.id ? {
    method: 'post',
    url: '/api/lists',
  } : {
      method: 'put',
      url: `/api/lists/${list.id}`,
    };

  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios[ops.method](ops.url, list)
      .then((result) => {
        dispatch(setLoadingStatus(false));
        dispatch(toggleAlertDialog({
          kind: 'success',
          message: result.data.message,
        }));
        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(ajaxErrorHandler(dispatch));
  };
}

export function deleteList(id, callback) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.delete(`/api/lists/${id}`)
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(toggleAlertDialog({
          kind: 'success',
          message: response.data.message,
        }));

        if (callback && typeof callback === 'function') {
          callback();
        }
      }).catch(ajaxErrorHandler(dispatch));
  };
}

export function addToList({ listId, movieId }, callback) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.post(`/api/lists/${listId}/movie/${movieId}`, {})
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(toggleAlertDialog({
          kind: 'success',
          message: response.data.message,
        }));

        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(ajaxErrorHandler(dispatch));
  };
}

export function removeFromList({ listId, movieId }, callback) {
  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.delete(`/api/lists/${listId}/movie/${movieId}`)
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(toggleAlertDialog({
          kind: 'success',
          message: response.data.message,
        }));

        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(ajaxErrorHandler(dispatch));
  };
}

export function setListMovies({ rows, count }) {
  return {
    type: SET_LIST_MOVIES,
    payload: {
      movies: rows,
      total: count,
    },
  };
}

export function getListMovies(query, callback) {
  const { listId, page, limit } = query;

  return (dispatch) => {
    dispatch(setLoadingStatus(true));
    axios.get(`/api/lists/${listId}?page=${page}&limit=${limit}`)
      .then((response) => {
        dispatch(setLoadingStatus(false));
        dispatch(setListMovies(response.data));
        if (callback && typeof callback === 'function') {
          callback();
        }
      })
      .catch(ajaxErrorHandler(dispatch));
  };
}
