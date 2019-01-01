import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getQuestionById, isAnswered } from '../../selectors/questions';
import PollPage from '../../components/pollPage/PollPage';

const mapStateToProps = (state, { match }) => {
  const { questionId } = match.params;
  const question = getQuestionById(state, questionId);
  const authedUserId = getAuthedUserId(state);
  return {
    question,
    isAnswered: !!question && isAnswered(question, authedUserId),
  };
};

export default connect(
  mapStateToProps,
)(toJS(PollPage));
