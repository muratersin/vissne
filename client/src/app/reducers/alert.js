

export default function alert(state = { show: false }, action) {
  switch (action.type) {
    case 'TOGGLE_ALERT': {
      const newst = Object.assign({}, state, {
        show: !state.show,
        message: action.alert.message,
        kind: action.alert.kind,
      });
      return newst;
    }

    default:
      return state;
  }
}
