import { combineReducers } from 'redux';

import app from './AppReducers';
import movie from './MovieReducers';
import common from './CommonReducers';

export default combineReducers({
  app,
  movie,
  common,
});
