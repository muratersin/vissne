
const initialState = {
  user: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        user: action.user,
      });

    default:
      return state;
  }
}
