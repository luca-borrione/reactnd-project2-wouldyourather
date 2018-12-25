import { connect } from 'react-redux';
import { getAuthedUserId } from '../../selectors/authedUserId';
import TopBar from '../../components/menuBar/TopBar';

const mapStateToProps = state => ({
  authedUserId: getAuthedUserId(state),
});

export default connect(
  mapStateToProps,
)(TopBar);
