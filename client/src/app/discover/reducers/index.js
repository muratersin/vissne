import { combineReducers } from 'redux';

import discover from './DiscoverReducers';
import movie from './MovieReducers';
import common from '../../common/Reducers';

export default combineReducers({
  discover,
  movie,
  common,
});
