import { fromJS, Map } from 'immutable';
import {
  ADD_USER_TO_QUESTION_VOTES,
  INIT_QUESTIONS,
} from '../actions/questions';

export default function reducer(state = new Map(), action) {
  switch (action.type) {
    case ADD_USER_TO_QUESTION_VOTES: {
      const { authedUserId, questionId, optionKey } = action;
      return state.mergeIn(
        [questionId, optionKey, 'votes'],
        authedUserId,
      );
    }

    case INIT_QUESTIONS: {
      return state.merge(fromJS(action.questions));
    }

    default:
      return state;
  }
}
