import { LOGIN, LOGOUT } from '../actions/authedUserId';

const reducer = (state = null, action) => {
  switch (action.type) {
    case LOGIN:
      return action.id;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

export default reducer;
