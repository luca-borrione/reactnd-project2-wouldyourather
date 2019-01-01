// @flow
import { type Reducer } from 'redux';
import { combineReducers } from 'redux-immutable';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authedUserId from './authedUserId';
import questions from './questions';
import status from './status';
import users from './users';
import {
  type StateMap,
  type StoreAction,
} from '../types';

const reducers = {
  authedUserId,
  loadingBar: loadingBarReducer,
  questions,
  status,
  users,
};

const reducer: Reducer<StateMap, StoreAction> = combineReducers(reducers);

export default reducer;
