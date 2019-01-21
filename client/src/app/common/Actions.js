
import { TOGGLE_ALERT, LOADING, TOGGLE_FILTER } from './ActionTypes';

export const toggleAlert = ({ message, kind }) => ({
  type: TOGGLE_ALERT,
  message,
  kind,
});

export const loading = status => ({
  type: LOADING,
  loading: status,
});

export const toggleFilter = showFilter => ({
  type: TOGGLE_FILTER,
  showFilter,
});
