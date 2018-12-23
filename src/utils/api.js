import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA';

export const getInitialData = () => (
  Promise.all([
    _getUsers(),
    _getQuestions(),
  ])
    .then(([users, questions]) => ({
      users,
      questions,
    }))
);

export const saveQuestion = (authedUserId, optionOneText, optionTwoText) => (
  _saveQuestion({
    author: authedUserId,
    optionOneText,
    optionTwoText,
  })
);

export const saveQuestionAnswer = (authedUserId, questionId, optionKey) => (
  _saveQuestionAnswer({
    authedUser: authedUserId,
    qid: questionId,
    answer: optionKey,
  })
);

export default undefined;
