import { INIT_USERS } from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case INIT_USERS:
      return {
        ...state,
        ...action.users,
      };

    default:
      return state;
  }
}
