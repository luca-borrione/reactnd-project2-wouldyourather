import { fromJS, Map, List } from 'immutable';
import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
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

    case ADD_QUESTION_TO_USER: {
      const { authedUserId, questionId } = action;
      // return state.updateIn(['a', 'b', 'c'], List(), list => list.push(123));
      return state.updateIn(
        [authedUserId, 'questions'],
        List(), list => list.push(questionId),
      );
    }

    case INIT_USERS: {
      return state.merge(fromJS(action.users));
    }

    default:
      return state;
  }
}
