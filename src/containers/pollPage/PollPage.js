// @flow
import { connect } from 'react-redux';
import { type Match } from 'react-router-dom';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getQuestionById, isAnswered } from '../../selectors/questions';
import PollPage from '../../components/pollPage/PollPage';
import { expectString } from '../../utils/helpers';
import {
  type QuestionMap,
  type StateMap,
} from '../../types';

const mapStateToProps = (
  state: StateMap,
  { match }: { match: Match},
): {
  isAnswered: boolean,
  question?: QuestionMap,
} => {
  const questionId: string = expectString(match.params.questionId);
  const question: QuestionMap | void = getQuestionById(state, questionId);
  const authedUserId: string = getAuthedUserId(state);
  return {
    question,
    isAnswered: !!question && isAnswered(question, authedUserId),
  };
};

export default connect(
  mapStateToProps,
)(toJS(PollPage));
