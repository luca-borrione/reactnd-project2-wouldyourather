import { map } from 'ramda';
import { initialState, User } from '../states/users';
import { INIT_USERS } from '../actions/users';

const createUser = user => new User(user);

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_USERS: {
      const users = map(createUser, action.users);
      return state.concat(users);
    }

    default:
      return state;
  }
}
