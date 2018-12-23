import { connect } from 'react-redux';
import { getAuthedUserId } from '../selectors/authedUserId';
import { BUSY_STATE, SUCCESS_STATE } from '../states/status';
import { getStatus } from '../selectors/status';
import { setQuestion } from '../actions/shared';
import { setReadyState } from '../actions/status';
import AddQuestionPage from '../components/AddQuestionPage';

const mapStateToProps = state => ({
  authedUserId: getAuthedUserId(state),
  busy: getStatus(state) === BUSY_STATE,
  success: getStatus(state) === SUCCESS_STATE,
});

const mapDispatchToProps = dispatch => ({
  setQuestion: (authedUserId, questionId, optionKey) => (
    dispatch(setQuestion(authedUserId, questionId, optionKey))
  ),
  setReadyState: () => (
    dispatch(setReadyState())
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddQuestionPage);
