import { connect } from 'react-redux';
import toJS from '../hoc/to-js';
import { getUserById } from '../selectors/users';
import SummaryCard from '../components/homePage/SummaryCard';

const mapStateToProps = (state, { question }) => ({
  author: getUserById(state, question.author),
});

export default connect(
  mapStateToProps,
)(toJS(SummaryCard));
