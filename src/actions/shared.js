import { showLoading, hideLoading } from 'react-redux-loading';
import { getInitialData } from '../utils/api';
import { initUsers } from './users';
import { initQuestions } from './questions';
import { logout } from './authedUser';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(initUsers(users));
        dispatch(initQuestions(questions));
        dispatch(logout());
        dispatch(hideLoading());
      });
  };
}

export default undefined;
