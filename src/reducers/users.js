import { fromJS, Map } from 'immutable';
import { INIT_USERS } from '../actions/users';

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case INIT_USERS: {
      return state.merge(fromJS(action.users));
    }

    default:
      return state;
  }
}
