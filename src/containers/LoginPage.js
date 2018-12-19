import { connect } from 'react-redux';
import toJS from '../hoc/to-js';
import { getAuthedUserId } from '../selectors/authedUserId';
import { getUsers } from '../selectors/users';
import { login } from '../actions/authedUserId';
import LoginPage from '../components/LoginPage';

const mapStateToProps = state => ({
  authedUserId: getAuthedUserId(state),
  users: getUsers(state),
});

const mapDispatchToProps = dispatch => ({
  login: userId => dispatch(login(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(LoginPage));
