import { combineReducers } from 'redux';

import account from '../reducers/account';
import common from '../reducers/common';

export default combineReducers({
  account,
  common,
});
