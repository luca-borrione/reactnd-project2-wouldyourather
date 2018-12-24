import { connect } from 'react-redux';
import { logout } from '../../actions/authedUserId';
import NavMenuItems from '../../components/menuBar/NavMenuItems';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(NavMenuItems);
