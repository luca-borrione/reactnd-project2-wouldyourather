import { createSelector } from 'reselect';
import { getAuthedUserId } from './authedUserId';
import { isAnswered } from './helpers';

const sortDescending = (a, b) => b.timestamp - a.timestamp;

const getQuestionsState = state => state.get('questions');

export const getAnsweredQuestions = createSelector(
  [getQuestionsState, getAuthedUserId],
  (questionsState, userId) => (
    questionsState
      .filter(question => isAnswered(question, userId))
      .sort(sortDescending)
      .toList()
  ),
);

export const getUnansweredQuestions = createSelector(
  [getQuestionsState, getAuthedUserId],
  (questionsState, userId) => (
    questionsState
      .filter(question => !isAnswered(question, userId))
      .sort(sortDescending)
      .toList()
  ),
);

export const getQuestionById = (state, questionId) => (
  getQuestionsState(state).get(questionId)
);
