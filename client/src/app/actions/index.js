export const TOGGLE_ALERT = 'TOGGLE_ALERT';
export const PAGE_LOADING = 'PAGE_LOADING';

export function toggleAlert({ message, kind }) {
  return {
    type: TOGGLE_ALERT,
    message,
    kind,
  };
}

export function loading(show) {
  return {
    TYPE: PAGE_LOADING,
    show,
  };
}
