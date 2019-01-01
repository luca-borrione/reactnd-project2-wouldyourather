// @flow
/* eslint-disable prefer-destructuring */

import { fromJS, Map } from 'immutable';
import {
  type QuestionsAction,
  ADD_QUESTION, type AddQuestionPayload,
  ADD_USER_TO_QUESTION_VOTES, type AddUserToQuestionVotesPayload,
  INIT_QUESTIONS, type InitQuestionsPayload,
} from '../actions/questions';
import {
  type QuestionMap,
  type QuestionsMap,
} from '../types';

const reducer = (state: QuestionsMap = new Map(), action: QuestionsAction) => {
  switch (action.type) {
    case ADD_QUESTION: {
      const payload: AddQuestionPayload | void = action.payload;
      if (payload) {
        const { question } = payload;
        const questionMap: QuestionMap = ((fromJS(question): any): QuestionMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge({ [question.id]: questionMap });
      }
      throw new Error('unexpected empty payload');
    }

    case ADD_USER_TO_QUESTION_VOTES: {
      const payload: AddUserToQuestionVotesPayload | void = action.payload;
      if (payload) {
        const { authedUserId, questionId, optionKey } = payload;
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.mergeIn(
          [questionId, optionKey, 'votes'],
          authedUserId,
        );
      }
      throw new Error('unexpected empty payload');
    }

    case INIT_QUESTIONS: {
      const payload: InitQuestionsPayload | void = action.payload;
      if (payload) {
        const { questions } = payload;
        const questionsMap: QuestionsMap = ((fromJS(questions): any): QuestionsMap);
        // $FlowSuppressError: The following line is borked because of https://github.com/facebook/flow/issues/7309
        return state.merge(questionsMap);
      }
      throw new Error('unexpected empty payload');
    }

    default:
      (action: empty); // eslint-disable-line no-unused-expressions
      return state;
  }
};

export default reducer;
