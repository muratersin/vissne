import { combineReducers } from 'redux';

import common from './common';
import app from './app';

export default combineReducers({
  common,
  app,
});
