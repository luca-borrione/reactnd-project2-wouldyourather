// @flow
import { connect } from 'react-redux';
import { type List } from 'immutable';
import toJS from '../hoc/to-js';
import { getAuthedUserId } from '../selectors/authedUserId';
import { getUsers } from '../selectors/users';
import { login, type LoginAction } from '../actions/authedUserId';
import LoginPage from '../components/LoginPage';
import {
  type Dispatch,
  type StateMap,
  type UserMap,
} from '../types';

type Action =
  | LoginAction

const mapStateToProps = (state: StateMap): {
  authedUserId: string,
  users: List<UserMap>,
} => ({
  authedUserId: getAuthedUserId(state),
  users: getUsers(state),
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  login: (userId: string): void => dispatch(login(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(toJS(LoginPage));
