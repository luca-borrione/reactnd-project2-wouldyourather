export const ADD_ANSWER_TO_USER = 'users/ADD_ANSWER_TO_USER';
export const ADD_QUESTION_TO_USER = 'users/ADD_QUESTION_TO_USER';
export const INIT_USERS = 'users/INIT_USERS';

export const addAnswerToUser = (authedUserId, questionId, optionKey) => ({
  type: ADD_ANSWER_TO_USER,
  authedUserId,
  questionId,
  optionKey,
});

export const addQuestionToUser = (authedUserId, questionId) => ({
  type: ADD_QUESTION_TO_USER,
  authedUserId,
  questionId,
});

export const initUsers = users => ({
  type: INIT_USERS,
  users,
});
