import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import LoadingBar from 'react-redux-loading';
import Navigation from './Navigation';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  static propTypes = {
    loadInitialData: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    const { loadInitialData } = this.props;
    document.title = 'Would You Rather...?';
    loadInitialData();
  }

  render() {
    const { loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        {loading === true
          ? null
          : <Navigation />}
      </Fragment>
    );
  }
}

export default App;
