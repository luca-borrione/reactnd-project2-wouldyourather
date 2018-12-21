export const ADD_USER_TO_QUESTION_VOTES = 'questions/ADD_USER_TO_QUESTION_VOTES';
export const INIT_QUESTIONS = 'questions/INIT_QUESTIONS';

export const addUserToQuestionVotes = (authedUserId, questionId, optionKey) => ({
  type: ADD_USER_TO_QUESTION_VOTES,
  authedUserId,
  questionId,
  optionKey,
});

export const initQuestions = questions => ({
  type: INIT_QUESTIONS,
  questions,
});
