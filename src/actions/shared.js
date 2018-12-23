import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api';
import { addAnswerToUser, addQuestionToUser, initUsers } from './users';
import { addQuestion, addUserToQuestionVotes, initQuestions } from './questions';
import { setBusyState, setReadyState, setSuccessState } from './status';

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  dispatch(setBusyState());
  return getInitialData()
    .then(({ users, questions }) => {
      dispatch(initUsers(users));
      dispatch(initQuestions(questions));
      dispatch(hideLoading());
      dispatch(setReadyState());
    });
};

export const setQuestion = (authedUserId, optionOneText, optionTwoText) => (dispatch) => {
  dispatch(showLoading());
  dispatch(setBusyState());
  return saveQuestion(authedUserId, optionOneText, optionTwoText)
    .then((question) => {
      dispatch(addQuestion(question));
      dispatch(addQuestionToUser(authedUserId, question.id));
      dispatch(hideLoading());
      dispatch(setSuccessState());
    });
};

export const setVote = (authedUserId, questionId, optionKey) => (dispatch) => {
  dispatch(showLoading());
  dispatch(setBusyState());
  return saveQuestionAnswer(authedUserId, questionId, optionKey)
    .then(() => {
      dispatch(addUserToQuestionVotes(authedUserId, questionId, optionKey));
      dispatch(addAnswerToUser(authedUserId, questionId, optionKey));
      dispatch(hideLoading());
      dispatch(setReadyState());
    });
};

export default undefined;
