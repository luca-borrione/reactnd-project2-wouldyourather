// @flow
import { connect } from 'react-redux';
import { getAuthedUserId } from '../selectors/authedUserId';
import PrivateRoute from '../components/PrivateRoute';
import {
  type StateMap,
} from '../types';

const mapStateToProps = (state: StateMap): {
  authedUserId: string,
} => ({
  authedUserId: getAuthedUserId(state),
});

export default connect(mapStateToProps)(PrivateRoute);
