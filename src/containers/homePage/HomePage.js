// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
import toJS from '../../hoc/to-js';
import { getAnsweredQuestions, getUnansweredQuestions } from '../../selectors/questions';
import HomePage from '../../components/homePage/HomePage';
import {
  type QuestionMap,
  type StateMap,
} from '../../types';

const mapStateToProps = (state: StateMap): {
  answeredQuestions: List<QuestionMap>,
  unansweredQuestions: List<QuestionMap>,
} => ({
  answeredQuestions: getAnsweredQuestions(state),
  unansweredQuestions: getUnansweredQuestions(state),
});

export default connect(
  mapStateToProps,
)(toJS(HomePage));
