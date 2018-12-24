import { combineReducers } from 'redux';

import common from './common';
import auth from './auth';
import app from './app';

export default combineReducers({
  common,
  auth,
  app,
});
