import {
  _getUsers,
  _getQuestions,
  _saveQuestionAnswer,
} from './_DATA';

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export const saveQuestionAnswer = (authedUserId, questionId, optionKey) => (
  _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: optionKey,
  })
);

export default undefined;
