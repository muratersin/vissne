
import { TOGGLE_ALERT, LOADING } from './action-types';

export function toggleAlert({ message, kind }) {
  return {
    type: TOGGLE_ALERT,
    message,
    kind,
  };
}

// FIXME: loading is unused
export function loading(show) {
  return {
    type: LOADING,
    show,
  };
}
