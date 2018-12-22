import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getUserById } from '../../selectors/users';
import ResultsCard from '../../components/pollPage/ResultsCard';

const mapStateToProps = (state, { question }) => ({
  authedUserId: getAuthedUserId(state),
  author: getUserById(state, question.author),
});

export default connect(
  mapStateToProps,
)(toJS(ResultsCard));
