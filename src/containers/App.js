import { connect } from 'react-redux';
import App from '../components/App';
import { BUSY_STATE } from '../states/status';
import { handleInitialData } from '../actions/shared';
import { getStatus } from '../selectors/status';

const mapStateToProps = state => ({
  loading: getStatus(state) === BUSY_STATE,
});

const mapDispatchToProps = dispatch => ({
  loadInitialData: () => dispatch(handleInitialData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
