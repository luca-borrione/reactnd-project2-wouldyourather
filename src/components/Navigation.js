import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from '../containers/LoginPage';
import HomePage from './HomePage';
import AddQuestionPage from './AddQuestionPage';
import LeaderBoardPage from './LeaderBoardPage';
import NotFoundPage from './NotFoundPage';

const Navigation = () => (
  <Router>
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/add" component={AddQuestionPage} />
      <Route path="/leaderboard" component={LeaderBoardPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default Navigation;
