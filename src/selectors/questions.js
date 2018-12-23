import { createSelector } from 'reselect';
import { getAuthedUserId } from './authedUserId';
import { isAnswered } from './helpers';

const descending = (a, b) => b.get('timestamp') - a.get('timestamp');

const getQuestionsState = state => state.get('questions');

export const getAnsweredQuestions = createSelector(
  [getQuestionsState, getAuthedUserId],
  (questionsState, userId) => (
    questionsState
      .filter(question => isAnswered(question, userId))
      .sort(descending)
      .toList()
  ),
);

export const getUnansweredQuestions = createSelector(
  [getQuestionsState, getAuthedUserId],
  (questionsState, userId) => (
    questionsState
      .filter(question => !isAnswered(question, userId))
      .sort(descending)
      .toList()
  ),
);

export const getQuestionById = (state, questionId) => (
  getQuestionsState(state).get(questionId)
);
