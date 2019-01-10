// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, type Store } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import middleware from './middleware';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import {
  type StateMap,
  type StoreAction,
} from './types';

const store: Store<StateMap, StoreAction> = createStore(reducer, middleware);
const root: HTMLElement | null = document.getElementById('root');

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root,
  );
}
