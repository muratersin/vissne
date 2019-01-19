import { UPDATE_PROFILE } from '../actions/ProfileActions';

const initialState = {
  lists: [],
};

export default function profile(state = initialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      
      break;
  
    default:
      return state;
  }
}


