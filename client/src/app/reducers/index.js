import { combineReducers } from 'redux';

import app from './AppReducers';
import movie from './MovieReducers';
import common from './CommonReducers';
import profile from './ProfileReducers';

export default combineReducers({
  app,
  movie,
  common,
  profile,
});
