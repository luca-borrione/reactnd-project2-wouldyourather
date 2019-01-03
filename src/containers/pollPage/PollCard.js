// @flow
import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getUserById } from '../../selectors/users';
import { BUSY_STATE } from '../../states/status';
import { getStatus } from '../../selectors/status';
import setVote, { type SetVoteAction } from '../../actions/thunk/setVote';
import PollCard from '../../components/pollPage/PollCard';
import {
  type Question,
  type Dispatch,
  type Thunk,
  type StateMap,
  type UserMap,
} from '../../types';
import { expectMap } from '../../utils/helpers';

type Action =
  | Thunk<SetVoteAction>

const mapStateToProps = (
  state: StateMap,
  { question }: { question: Question},
): {
  authedUserId: string,
  author: UserMap,
  busy: boolean,
} => ({
  authedUserId: getAuthedUserId(state),
  author: expectMap(getUserById(state, question.author)),
  busy: getStatus(state) === BUSY_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  setVote: (authedUserId: string, questionId: string, optionKey: string): void => (
    dispatch(setVote(authedUserId, questionId, optionKey))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(PollCard));
