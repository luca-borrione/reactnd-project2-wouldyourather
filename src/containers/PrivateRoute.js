import { connect } from 'react-redux';
import { getAuthedUserId } from '../selectors/authedUserId';
import PrivateRoute from '../components/PrivateRoute';

const mapStateToProps = state => ({
  authedUserId: getAuthedUserId(state),
});

export default connect(mapStateToProps)(PrivateRoute);
