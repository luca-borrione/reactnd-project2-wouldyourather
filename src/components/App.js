import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    document.title = 'Would You Rather...?';
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        {loading === true
          ? null
          : <div>Hello World!</div>}
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser }) {
  console.log('****** authedUser', authedUser); // eslint-disable-line
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
