// @flow
import {
  type InitialData,
  type Question,
  type Questions,
  type Users,
} from '../types';
import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export const getInitialData = (): Promise<InitialData> => (
  Promise.all([
    (_getQuestions(): Questions),
    (_getUsers(): Users),
  ])
    .then(([questions, users]) => ({
      questions,
      users,
    }))
);

export const saveQuestion = (
  authedUserId: string,
  optionOneText: string,
  optionTwoText: string,
): Promise<Question> => (
  _saveQuestion({
    author: authedUserId,
    optionOneText,
    optionTwoText,
  })
);

export const saveQuestionAnswer = (
  authedUserId: string,
  questionId: string,
  optionKey: string,
): Promise<void> => (
  _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: optionKey,
  })
);
