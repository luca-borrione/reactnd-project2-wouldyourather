// @flow
import { connect } from 'react-redux';
import { getAuthedUserId } from '../../selectors/authedUserId';
import {
  getUserById,
  user,
} from '../../selectors/users';
import {
  logout,
  type LogoutAction,
} from '../../actions/authedUserId';
import MyAccountMenuItem from '../../components/menuBar/MyAccountMenuItem';
import {
  type Dispatch,
  type StateMap,
  type UserMap,
} from '../../types';
import { expectMap } from '../../utils/helpers';

type Action =
  | LogoutAction

const mapStateToProps = (state: StateMap): {
  avatarURL: string,
  name: string,
} => {
  const authedUserId: string = getAuthedUserId(state);
  const userMap: UserMap = expectMap(getUserById(state, authedUserId));
  const { avatarURL, name } = user(userMap);
  return {
    avatarURL,
    name,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  logout: (): void => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountMenuItem);
