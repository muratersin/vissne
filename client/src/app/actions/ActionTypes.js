// auth
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';

// common
export const LOADING = 'LOADING';
export const TOGGLE_ALERT = 'TOGGLE_ALERT';

// app
export const GET_MOVIES = 'GET_MOVIES';
export const SET_MOVIES = 'SET_MOVIES';
export const SET_GENRES = 'SET_GENRES';
export const SET_QUERY = 'SET_QUERY';

// movie detail
export const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

// constants
export const SORT_OPTIONS = [
  {
    name: 'Popularity',
    value: 'desc',
  },
  {
    name: 'Release Date',
    value: 'desc',
  },
  {
    name: 'Revenue',
    value: 'desc',
  },
  {
    name: 'Primary Release Date',
    value: 'desc',
  },
  {
    name: 'Orginal Title',
    value: 'desc',
  },
  {
    name: 'Vote Average',
    value: 'desc',
  },
  {
    name: 'Vote Count',
    value: 'desc',
  }
];
