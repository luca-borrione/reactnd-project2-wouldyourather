import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading';
import authedUserId from './authedUserId';
import questions from './questions';
import status from './status';
import users from './users';

export default combineReducers({
  authedUserId,
  loadingBar: loadingBarReducer,
  questions,
  status,
  users,
});
