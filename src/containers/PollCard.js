import { connect } from 'react-redux';
import toJS from '../hoc/to-js';
import { getAuthedUserId } from '../selectors/authedUserId';
import { getUserById } from '../selectors/users';
import { BUSY_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import { saveVote } from '../actions/shared';
import PollCard from '../components/pollPage/PollCard';

const mapStateToProps = (state, { question }) => ({
  authedUserId: getAuthedUserId(state),
  author: getUserById(state, question.author),
  busy: getStatus(state) === BUSY_STATE,
});

const mapDispatchToProps = dispatch => ({
  saveVote: (authedUserId, questionId, optionKey) => (
    dispatch(saveVote(authedUserId, questionId, optionKey))
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(PollCard));