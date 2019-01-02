// @flow
import { connect } from 'react-redux';
import { getAuthedUserId } from '../selectors/authedUserId';
import { BUSY_STATE, SUCCESS_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import setQuestion, { type SetQuestionAction } from '../actions/thunk/setQuestion';
import { setReadyState, type SetReadyStateAction } from '../actions/status';
import AddQuestionPage from '../components/AddQuestionPage';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
} from '../types';

type Action =
  | Thunk<SetQuestionAction>
  | SetReadyStateAction

const mapStateToProps = (state: StateMap): {
  authedUserId: string,
  busy: boolean,
  success: boolean,
} => ({
  authedUserId: getAuthedUserId(state),
  busy: getStatus(state) === BUSY_STATE,
  success: getStatus(state) === SUCCESS_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setQuestion: (authedUserId: string, questionId: string, optionKey: string): void => (
    dispatch(setQuestion(authedUserId, questionId, optionKey))
  ),
  setReadyState: (): void => (
    dispatch(setReadyState())
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestionPage);
