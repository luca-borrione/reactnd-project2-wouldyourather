import { combineReducers } from 'redux-immutable';
import { loadingBarReducer } from 'react-redux-loading-bar';
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
