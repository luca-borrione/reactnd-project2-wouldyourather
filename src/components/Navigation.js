import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRouteContainer';
import LoginPage from '../containers/LoginPageContainer';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

/**
 * @module
 * @name Navigation
 * @description
 * Switches the navigation of the app to:
 * - [MyReads]{@link module:MyReads} when the browser location path is exactly '/'
 * - [SearchPage]{@link module:SearchPage} when the browser location path contains '/search'
 * - [NotFoundPage]{@link module:NotFoundPage} when the browser location contains an unexpected path
 */
const Navigation = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute
        exact
        path="/"
        component={HomePage}
      />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

/**
 * @memberof module:Navigation
 * @description Intended types of the props passed to the component
 * @property {Array.<TBook>} booksInShelves - see [booksInShelves]{@link module:App~state}
 * @property {function} getBookShelf - see [getBookShelf]{@link module:App~getBookShelf}
 * @property {function} updateBookShelf - see [updateBookShelf]{@link module:App~updateBookShelf}
 */
// Navigation.propTypes = {
//   booksInShelves: PropTypes.arrayOf(
//     PropTypes.shape(TBook).isRequired,
//   ).isRequired,
//   getBookShelf: PropTypes.func.isRequired,
//   updateBookShelf: PropTypes.func.isRequired,
// };

export default Navigation;
