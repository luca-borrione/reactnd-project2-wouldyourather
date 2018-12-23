import { connect } from 'react-redux';
import toJS from '../../hoc/to-js';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getLeaders } from '../../selectors/users';
import LeaderboardPage from '../../components/leaderboardPage/LeaderboardPage';

const mapStateToProps = state => ({
  authedUserId: getAuthedUserId(state),
  leaders: getLeaders(state),
});

export default connect(
  mapStateToProps,
)(toJS(LeaderboardPage));
