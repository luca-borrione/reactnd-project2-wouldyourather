// @flow
import { connect } from 'react-redux';
import { List } from 'immutable';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getLeaders } from '../../selectors/users';
import LeaderboardPage from '../../components/leaderboardPage/LeaderboardPage';
import {
  type LeaderMap,
  type StateMap,
} from '../../types';

const mapStateToProps = (state: StateMap): {
  authedUserId: string,
  leaders: List<LeaderMap>
} => ({
  authedUserId: getAuthedUserId(state),
  leaders: getLeaders(state),
});

export default connect(
  mapStateToProps,
)(toJS(LeaderboardPage));
