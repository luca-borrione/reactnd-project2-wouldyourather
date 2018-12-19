import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { initUsers } from './users';
import { initQuestions } from './questions';
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

export default undefined;
