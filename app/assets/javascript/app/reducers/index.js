import { combineReducers } from 'redux';

import account from './account';
import discover from './discover';
import movie from './movie';
import common from './common';

export default combineReducers({
  account,
  discover,
  movie,
  common,
});
