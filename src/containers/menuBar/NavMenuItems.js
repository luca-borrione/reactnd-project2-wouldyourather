// @flow
import { connect } from 'react-redux';
import {
  logout,
  type LogoutAction,
} from '../../actions/authedUserId';
import NavMenuItems from '../../components/menuBar/NavMenuItems';
import { type Dispatch } from '../../types';

type Action =
  | LogoutAction

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  logout: (): void => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(NavMenuItems);
