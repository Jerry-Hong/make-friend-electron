import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, SHOW_SIGNUP, CLOSE_SIGNUP } from './login.js';

export default function(state = { isFail: false, showSignUp: false }, action) {
    switch(action.type) {
    case LOGIN_FAIL:
        return { ...state, isFail: true, isLogin: false };
    case LOGIN_SUCCESS:
        return { ...state, isFail: false, isLogin: true };
    case SHOW_SIGNUP:
        return { ...state, showSignup: true };
    case CLOSE_SIGNUP:
        return { ...state, showSignup: false };
    default:
        return state;
    }
}