// @flow
import { type List } from 'immutable';
import { isMap } from '../utils/helpers';
import { getAuthedUserId } from './authedUserId';
import {
  type QuestionsMap,
  type QuestionMap,
  type QuestionValue,
  type StateValue,
  type StateMap,
} from '../types';

const questions = (state: StateMap): QuestionsMap => {
  const q: StateValue | void = state.get('questions');
  if (q && isMap) {
    return ((q: any): QuestionsMap);
  }
  throw new TypeError(`unexpected type: ${typeof q}`);
};

const timestamp = (question: QuestionMap): number => {
  const t: QuestionValue | void = question.get('timestamp');
  if (typeof t === 'number') {
    return t;
  }
  throw new TypeError(`unexpected type: ${typeof t}`);
};

/* - - - - - - - */

const descendingByTimestamp = (a: QuestionMap, b: QuestionMap): number => (
  timestamp(b) - timestamp(a)
);


export const isAnswered = (question: QuestionMap, userId: string): boolean => {
  function isOptionVoted(optionKey: string): boolean {
    // FIXME: reason for the following any: https://github.com/facebook/flow/issues/7307
    return ((question: any).getIn([optionKey, 'votes']): List<string>).includes(userId);
  }
  return isOptionVoted('optionOne') || isOptionVoted('optionTwo');
};


export const getAnsweredQuestions = (state: StateMap): List<QuestionMap> => {
  const userId: string = getAuthedUserId(state);
  return questions(state)
    .filter(question => isAnswered(question, userId))
    .sort(descendingByTimestamp)
    .toList();
};


export const getUnansweredQuestions = (state: StateMap): List<QuestionMap> => {
  const userId: string = getAuthedUserId(state);
  return questions(state)
    .filter(question => !isAnswered(question, userId))
    .sort(descendingByTimestamp)
    .toList();
};


export const getQuestionById = (state: StateMap, questionId: string): QuestionMap => {
  const question: QuestionMap | void = questions(state).get(questionId);
  if (question && isMap(question)) {
    return question;
  }
  throw new TypeError(`unexpected type: ${typeof question}`);
};
