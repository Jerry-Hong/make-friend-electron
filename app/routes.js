import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import FriendListPage from './containers/FriendListPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route component={ FriendListPage } path="/friendList"></Route>
  </Route>
);
