// @flow
import { connect } from 'react-redux';
import App from '../components/App';
import { INIT_STATE } from '../states/status';
import handleInitialData, { type InitialDataAction } from '../actions/thunk/handleInitialData';
import { getStatus } from '../selectors/status';
import {
  type Dispatch,
  type StateMap,
  type Thunk,
} from '../types';

type Action =
  | Thunk<InitialDataAction>

const mapStateToProps = (state: StateMap): {
  loading: boolean,
} => ({
  loading: getStatus(state) === INIT_STATE,
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  loadInitialData: (): void => dispatch(handleInitialData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
