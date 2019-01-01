import { connect } from 'react-redux';
import App from '../components/App';
import { INIT_STATE } from '../states/status';
import handleInitialData from '../actions/thunk/handleInitialData';
import { getStatus } from '../selectors/status';

const mapStateToProps = state => ({
  loading: getStatus(state) === INIT_STATE,
});

const mapDispatchToProps = dispatch => ({
  loadInitialData: () => dispatch(handleInitialData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
