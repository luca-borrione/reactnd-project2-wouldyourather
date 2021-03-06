// @flow
import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getUserById } from '../../selectors/users';
import ResultsCard from '../../components/pollPage/ResultsCard';
import {
  type Question,
  type StateMap,
  type UserMap,
} from '../../types';
import { expectMap } from '../../utils/helpers';

const mapStateToProps = (
  state: StateMap,
  { question }: { question: Question},
): {
  authedUserId: string,
  author: UserMap,
} => ({
  authedUserId: getAuthedUserId(state),
  author: expectMap(getUserById(state, question.author)),
});

export default connect(
  mapStateToProps,
)(toJS(ResultsCard));
