// common
export const LOADING = 'LOADING';
export const TOGGLE_ALERT = 'TOGGLE_ALERT';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';

// auth
export const SET_PAGE_LOADING_STATUS = 'SET_PAGE_LOADING_STATUS';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const REGISTER = 'REGISTER';
export const SET_USER = 'SET_USER';

// discover
export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_GENRES = 'SET_GENRES';
export const SET_QUERY = 'SET_QUERY';

// movie detail
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

// profile
//  -- Account
export const SET_ACCOUNT_DETAIL = 'SET_ACCOUNT_DETAIL';
export const SET_UPLOADED_IMAGE = 'SET_UPLOADED_IMAGE';

// constants
export const SORT_OPTIONS = [{
  name: 'Popularity',
  value: 'desc',
}, {
  name: 'Release Date',
  value: 'desc',
}, {
  name: 'Revenue',
  value: 'desc',
}, {
  name: 'Primary Release Date',
  value: 'desc',
}, {
  name: 'Orginal Title',
  value: 'desc',
}, {
  name: 'Vote Average',
  value: 'desc',
}, {
  name: 'Vote Count',
  value: 'desc',
}];
