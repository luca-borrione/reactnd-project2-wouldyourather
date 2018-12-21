import { connect } from 'react-redux';
import toJS from '../hoc/to-js';
import { getQuestionById } from '../selectors/questions';
import PollPage from '../components/pollPage/PollPage';

const mapStateToProps = (state, { match }) => ({
  question: getQuestionById(state, match.params.questionId),
  userHasVoted:
});

export default connect(
  mapStateToProps,
)(toJS(PollPage));
