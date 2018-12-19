import { connect } from 'react-redux';
import toJS from '../hoc/to-js';
import { getAnsweredQuestions, getUnansweredQuestions } from '../selectors/questions';
import HomePage from '../components/homePage/HomePage';

const mapStateToProps = state => ({
  answeredQuestions: getAnsweredQuestions(state),
  unansweredQuestions: getUnansweredQuestions(state),
});

export default connect(
  mapStateToProps,
)(toJS(HomePage));
