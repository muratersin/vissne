import { SET_LISTS } from '../constants/action-types';

const initialState = {
  lists: [],
  total: 0,
  tableFields: [{
    title: 'Id',
    field: 'id',
    hidden: true,
  }, {
    title: 'Name',
    field: 'name',
  }, {
    title: 'Create Date',
    field: 'createdAt',
  }],
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload,
      });

    default:
      return state;
  }
}
