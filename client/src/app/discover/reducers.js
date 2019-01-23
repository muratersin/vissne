import { combineReducers } from 'redux';

import discover from '../reducers/discover';
import movie from '../reducers/movie';
import common from '../reducers/common';

export default combineReducers({
  discover,
  movie,
  common,
});
