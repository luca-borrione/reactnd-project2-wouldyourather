import { LOGIN, LOGOUT } from '../actions/authedUserId';

export default function reducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.id;

    case LOGOUT:
      return '';

    default:
      return state;
  }
}
