// @flow
import React, { Component, type Element, Fragment } from 'react';
import { ImmutableLoadingBar as LoadingBar } from 'react-redux-loading-bar';
import Navigation from './Navigation';

type Props = {
  basename?: string,
  loadInitialData: () => void,
  loading: boolean,
};

class App extends Component<Props> {
  static defaultProps = {
    basename: '',
  };

  componentDidMount(): void {
    const { loadInitialData } = this.props;
    document.title = 'Would You Rather...?';
    loadInitialData();
  }

  render(): Element<any> {
    const { basename, loading } = this.props;
    return (
      <Fragment>
        <LoadingBar />
        {loading === true
          ? null
          : <Navigation basename={basename} />}
      </Fragment>
    );
  }
}

export default App;
