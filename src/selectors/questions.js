// @flow
import { type List } from 'immutable';
import { getAuthedUserId } from './authedUserId';
import {
  type IQuestionOptionMap,
  type QuestionOptionMap,
  type QuestionOptionValue,
  type IQuestionMap,
  type QuestionsMap,
  type QuestionMap,
  type QuestionValue,
  type StateValue,
  type StateMap,
} from '../types';
import {
  asList,
  asMap,
  asNumber,
  asString,
} from '../utils/helpers';

export const option = (optionMap: QuestionOptionMap): IQuestionOptionMap => {
  const votes: QuestionOptionValue | void = optionMap.get('votes');
  return {
    votes: (asList(votes): List<string>),
    text: asString(optionMap.get('text')),
  };
};

export const question = (questionMap: QuestionMap): IQuestionMap => {
  const optionOne: QuestionValue | void = questionMap.get('optionOne');
  const optionTwo: QuestionValue | void = questionMap.get('optionTwo');
  return {
    author: asString(questionMap.get('author')),
    id: asString(questionMap.get('id')),
    optionOne: (asMap(optionOne): QuestionOptionMap),
    optionTwo: (asMap(optionTwo): QuestionOptionMap),
    timestamp: asNumber(questionMap.get('timestamp')),
  };
};

const questions = (state: StateMap): QuestionsMap => {
  const questionsMap: StateValue | void = state.get('questions');
  return (asMap(questionsMap): QuestionsMap);
};

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

export const getQuestionById = (state: StateMap, questionId: string): QuestionMap => {
  const questionMap: QuestionMap | void = questions(state).get(questionId);
  return (asMap(questionMap): QuestionMap);
};
