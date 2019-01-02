// @flow
import { connect } from 'react-redux';
import { getAuthedUserId } from '../../selectors/authedUserId';
import TopBar from '../../components/menuBar/TopBar';
import { type StateMap } from '../../types';

const mapStateToProps = (state: StateMap): {
  authedUserId: string,
} => ({
  authedUserId: getAuthedUserId(state),
});

export default connect(
  mapStateToProps,
)(TopBar);
