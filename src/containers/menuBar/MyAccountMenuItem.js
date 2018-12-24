import { connect } from 'react-redux';
import { getAuthedUserId } from '../../selectors/authedUserId';
import { getUserById } from '../../selectors/users';
import { logout } from '../../actions/authedUserId';
import MyAccountMenuItem from '../../components/menuBar/MyAccountMenuItem';

const mapStateToProps = (state) => {
  const authedUserId = getAuthedUserId(state);
  const user = getUserById(state, authedUserId);
  return {
    avatarURL: user.get('avatarURL'),
    userName: user.get('name'),
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyAccountMenuItem);
