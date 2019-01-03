// @flow
import { type List } from 'immutable';
import { getAuthedUserId } from './authedUserId';
import {
  type IQuestionOptionMap,
  type QuestionOptionMap,
  type IQuestionMap,
  type QuestionsMap,
  type QuestionMap,
  type StateMap,
} from '../types';
import {
  expectList,
  expectMap,
  expectNumber,
  expectString,
} from '../utils/helpers';

export const option = (optionMap: QuestionOptionMap): IQuestionOptionMap => ({
  text: expectString(optionMap.get('text')),
  votes: (expectList(optionMap.get('votes')): List<string>),
});

export const question = (questionMap: QuestionMap): IQuestionMap => ({
  author: expectString(questionMap.get('author')),
  id: expectString(questionMap.get('id')),
  optionOne: (expectMap(questionMap.get('optionOne')): QuestionOptionMap),
  optionTwo: (expectMap(questionMap.get('optionTwo')): QuestionOptionMap),
  timestamp: expectNumber(questionMap.get('timestamp')),
});

const questions = (state: StateMap): QuestionsMap => (
  (expectMap(state.get('questions')): QuestionsMap)
);

/* - - - - - - - */

const descendingByTimestamp = (a: QuestionMap, b: QuestionMap): number => (
  question(b).timestamp - question(a).timestamp
);

export const isAnswered = (questionMap: QuestionMap, userId: string): boolean => {
  const { optionOne, optionTwo } = question(questionMap);
  return option(optionOne).votes.includes(userId)
    || option(optionTwo).votes.includes(userId);
};

export const getAnsweredQuestions = (state: StateMap): List<QuestionMap> => {
  const userId: string = getAuthedUserId(state);
  return questions(state)
    .filter(questionMap => isAnswered(questionMap, userId))
    .sort(descendingByTimestamp)
    .toList();
};

export const getUnansweredQuestions = (state: StateMap): List<QuestionMap> => {
  const userId: string = getAuthedUserId(state);
  return questions(state)
    .filter(questionMap => !isAnswered(questionMap, userId))
    .sort(descendingByTimestamp)
    .toList();
};

export const getQuestionById = (state: StateMap, questionId: string): QuestionMap | void => (
  questions(state).get(questionId)
);
