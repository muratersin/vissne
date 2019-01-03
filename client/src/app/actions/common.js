
import { TOGGLE_ALERT, LOADING } from './action-types';

export function toggleAlert({ message, kind }) {
  return {
    type: TOGGLE_ALERT,
    message,
    kind,
  };
}

export function loading(loading) {
  return {
    type: LOADING,
    loading,
  };
}
