import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import FriendListPage from './containers/FriendListPage.js';
import FriendPage from './containers/FriendPage.js';
import Mask from './components/Mask.js';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route component={ FriendListPage } path="/friendList">
        <Route components={ { main: FriendPage, mask: Mask } } path='/friend'></Route>
    </Route>
  </Route>
);
