// @flow
/* eslint-disable prefer-destructuring */

import { fromJS, Map, List } from 'immutable';
import {
  type UsersAction,
  ADD_ANSWER_TO_USER, type AddAnswerToUserPayload,
  ADD_QUESTION_TO_USER, type AddQuestionToUserPayload,
  INIT_USERS, type InitUsersPayload,
} from '../actions/users';
import {
  type UsersMap,
} from '../types';

const reducer = (state: UsersMap = new Map(), action: UsersAction) => {
  switch (action.type) {
    case ADD_ANSWER_TO_USER: {
      const payload: AddAnswerToUserPayload | void = action.payload;
      if (payload) {
        const { authedUserId, questionId, optionKey } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.mergeIn([authedUserId, 'answers'], {
          [questionId]: optionKey,
        });
      }
      throw new Error('unexpected empty payload');
    }

    case ADD_QUESTION_TO_USER: {
      const payload: AddQuestionToUserPayload | void = action.payload;
      if (payload) {
        const { authedUserId, questionId } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.updateIn(
          [authedUserId, 'questions'],
          (list: List<string>) => list.push(questionId),
        );
      }
      throw new Error('unexpected empty payload');
    }

    case INIT_USERS: {
      const payload: InitUsersPayload | void = action.payload;
      if (payload) {
        const { users } = payload;
        const usersMap: UsersMap = ((fromJS(users): any): UsersMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge(usersMap);
      }
      throw new Error('unexpected empty payload');
    }

    default:
      (action: empty);
      return state;
  }
};

export default reducer;
