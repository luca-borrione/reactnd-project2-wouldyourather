// @flow
import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getUserById } from '../../selectors/users';
import PreviewCard from '../../components/homePage/PreviewCard';
import { expectMap } from '../../utils/helpers';
import {
  type Question,
  type StateMap,
  type UserMap,
} from '../../types';

const mapStateToProps = (
  state: StateMap,
  { question }: { question: Question},
): {
  author: UserMap
} => ({
  author: expectMap(getUserById(state, question.author)),
});

export default connect(
  mapStateToProps,
)(toJS(PreviewCard));
