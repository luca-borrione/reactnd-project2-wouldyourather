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
const basename: string = window.location.pathname.replace(/\/[^/]+\.[a-z0-9]{3,4}$/i, '/').replace(/\/$/, '');
console.log('window.location', window.location); // eslint-disable-line no-console
console.log(`basename: ${basename}`); // eslint-disable-line no-console

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App basename={basename} />
    </Provider>,
    root,
  );
}
