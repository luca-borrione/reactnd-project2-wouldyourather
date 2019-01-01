// @flow
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion } from '../../utils/api';
import { addQuestionToUser, type AddQuestionToUserAction } from '../users';
import { addQuestion, type AddQuestionAction } from '../questions';
import {
  setBusyState, type SetBusyStateAction,
  setSuccessState, type SetSuccessStateAction,
} from '../status';
import {
  type Dispatch,
  type Question,
  type Thunk,
} from '../../types';

type SetQuestionAction =
  | SetBusyStateAction
  | AddQuestionAction
  | AddQuestionToUserAction
  | SetSuccessStateAction

function setQuestion(
  authedUserId: string,
  optionOneText: string,
  optionTwoText: string,
): Thunk<SetQuestionAction> {
  return (dispatch: Dispatch<SetQuestionAction>): Promise<void> => {
    dispatch(showLoading());
    dispatch(setBusyState());
    return saveQuestion(authedUserId, optionOneText, optionTwoText)
      .then((question: Question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(authedUserId, question.id));
        dispatch(hideLoading());
        dispatch(setSuccessState());
      });
  };
}

export default setQuestion;
