import { combineReducers } from 'redux';

import app from './app';
import movie from './movie';
import common from './common';

export default combineReducers({
  app,
  movie,
  common,
});
