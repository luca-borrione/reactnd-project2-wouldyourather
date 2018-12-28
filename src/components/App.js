// @flow
import React, { Component, type Element, Fragment } from 'react';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
import Navigation from './Navigation';

type Props = {
  loadInitialData: () => void,
  loading: boolean,
};

class App extends Component<Props> {
  componentDidMount(): void {
    const { loadInitialData } = this.props;
    document.title = 'Would You Rather...?';
    loadInitialData();
  }

  render(): Element<any> {
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
