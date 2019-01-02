// @flow
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../../utils/api';
import { initUsers, type InitUsersAction } from '../users';
import { initQuestions, type InitQuestionsAction } from '../questions';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Dispatch,
  type InitialData,
  type Thunk,
} from '../../types';

export type InitialDataAction =
  | SetBusyStateAction
  | InitUsersAction
  | InitQuestionsAction
  | SetReadyStateAction

function handleInitialData(): Thunk<InitialDataAction> {
  return (dispatch: Dispatch<InitialDataAction>): Promise<void> => {
    dispatch(showLoading());
    dispatch(setBusyState());
    return getInitialData()
      .then(({ questions, users }: InitialData) => {
        dispatch(initUsers(users));
        dispatch(initQuestions(questions));
        dispatch(hideLoading());
        dispatch(setReadyState());
      });
  };
}

export default handleInitialData;
