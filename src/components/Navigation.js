// @flow
import React, { type Element } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from '../containers/PrivateRoute';
import LoginPage from '../containers/LoginPage';
import HomePage from '../containers/homePage/HomePage';
import PollPage from '../containers/pollPage/PollPage';
import AddQuestionPage from '../containers/AddQuestionPage';
import LeaderboardPage from '../containers/leaderboardPage/LeaderboardPage';
import NotFoundPage from './NotFoundPage';
import { getBasename } from '../utils/helpers';

const Navigation = (): Element<any> => (
  <Router basename={getBasename()}>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute path="/question/:questionId" component={PollPage} />
      <PrivateRoute path="/add" component={AddQuestionPage} />
      <PrivateRoute path="/leaderboard" component={LeaderboardPage} />
      <PrivateRoute component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Navigation;
