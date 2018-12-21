export const ADD_ANSWER_TO_USER = 'users/ADD_ANSWER_TO_USER';
export const INIT_USERS = 'users/INIT_USERS';

export const addAnswerToUser = (authedUserId, questionId, optionKey) => ({
  type: ADD_ANSWER_TO_USER,
  authedUserId,
  questionId,
  optionKey,
});

export const initUsers = users => ({
  type: INIT_USERS,
  users,
});
