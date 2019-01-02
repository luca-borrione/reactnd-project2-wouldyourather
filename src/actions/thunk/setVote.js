// @flow
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer } from '../../utils/api';
import { addAnswerToUser, type AddAnswerToUserAction } from '../users';
import { addUserToQuestionVotes, type AddUserToQuestionVotesAction } from '../questions';
import {
  setBusyState, type SetBusyStateAction,
  setReadyState, type SetReadyStateAction,
} from '../status';
import {
  type Dispatch,
  type Thunk,
} from '../../types';

export type SetVoteAction =
  | SetBusyStateAction
  | SetReadyStateAction
  | AddAnswerToUserAction
  | AddUserToQuestionVotesAction

function setVote(
  authedUserId: string,
  questionId: string,
  optionKey: string,
): Thunk<SetVoteAction> {
  return (dispatch: Dispatch<SetVoteAction>): Promise<void> => {
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
}

export default setVote;
