import { fromJS, Map } from 'immutable';
import {
  ADD_ANSWER_TO_USER,
  INIT_USERS,
} from '../actions/users';

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case ADD_ANSWER_TO_USER: {
      const { authedUserId, questionId, optionKey } = action;
      return state.mergeIn([authedUserId, 'answers'], {
        [questionId]: optionKey,
      });
    }

    case INIT_USERS: {
      return state.merge(fromJS(action.users));
    }

    default:
      return state;
  }
}
