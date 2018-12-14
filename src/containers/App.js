import { connect } from 'react-redux';
import App from '../components/App';
import { BUSY_STATE } from '../states/status';
import { handleInitialData } from '../actions/shared';
import 'semantic-ui-css/semantic.min.css';

function mapStateToProps({ status }) {
  return {
    loading: status === BUSY_STATE,
  };
}

const mapDispatchToProps = dispatch => ({
  loadInitialData: () => dispatch(handleInitialData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
