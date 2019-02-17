import { SET_LISTS } from '../constants/action-types';

const initialState = {
  lists: [],
  total: 0,
  tableFields: [{
    title: 'Id',
    name: 'id',
    hidden: true,
  }, {
    title: 'Name',
    name: 'name',
  }, {
    title: 'Create Date',
    name: 'createdAt',
    format(value) {
      const date = new Date(value);
      return date.toLocaleDateString();
    },
  }, {
    title: 'Visibility',
    name: 'public',
    format(value) {
      return value ? 'Public' : 'Private';
    },
  }],
};

export default function lists(state = initialState, action) {
  switch (action.type) {
    case SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload.lists,
        total: action.payload.total,
      });

    default:
      return state;
  }
}
