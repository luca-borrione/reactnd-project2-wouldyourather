// @flow
import { connect } from 'react-redux';
import { type Match } from 'react-router-dom';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getQuestionById, isAnswered } from '../../selectors/questions';
import PollPage from '../../components/pollPage/PollPage';
import { asString } from '../../utils/helpers';
import {
  type QuestionMap,
  type StateMap,
} from '../../types';

const mapStateToProps = (
  state: StateMap,
  { match }: { match: Match},
): {
  isAnswered: boolean,
  question: QuestionMap,
} => {
  const { questionId } = match.params;
  const question: QuestionMap = getQuestionById(state, asString(questionId));
  const authedUserId: string = getAuthedUserId(state);
  return {
    question,
    isAnswered: !!question && isAnswered(question, authedUserId),
  };
};

export default connect(
  mapStateToProps,
)(toJS(PollPage));
