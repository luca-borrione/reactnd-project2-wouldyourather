import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData, saveQuestionAnswer } from '../utils/api';
import { addAnswerToUser, initUsers } from './users';
import { addUserToQuestionVotes, initQuestions } from './questions';
import { setBusyState, setReadyState } from './status';

export function handleInitialData() {
  return (dispatch) => {
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
}

export const saveVote = (authedUserId, questionId, optionKey) => (dispatch) => {
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
