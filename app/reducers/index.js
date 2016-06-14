import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login from './login.js';
import home from './home.js';
import friends from './friends.js';

const rootReducer = combineReducers({
    friends,
    login,
    home,
    routing
});

export default rootReducer;
