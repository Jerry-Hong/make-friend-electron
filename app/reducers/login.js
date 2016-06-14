import axios from 'axios';
import URL from '../utils/URL.js';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SHOW_SIGNUP = 'SHOW_SIGNUP';
export const CLOSE_SIGNUP = 'CLOSE_SIGNUP';
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESSS = 'SIGNUP_SUCCESSS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';


export const login = (req) => {
    return dispatch => {
        dispatch({ type: LOGIN_REQUEST });
        return axios
        .post(`${ URL }/login`, req)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        }, error => dispatch({ type: LOGIN_FAIL, payload: error.data }))

    }
}

export const showSignup = () => {
    return {
        type: SHOW_SIGNUP
    }
}

export const closeSignup = () => {
    return {
        type: CLOSE_SIGNUP
    }
}

export const signupSubmit = (data) => {
    return dispatch => {
        dispatch({ type: SIGNUP_REQUEST })
        return axios
        .post(`${ URL }/signup`, data)
        .then(res => {
            dispatch({ type: SIGNUP_SUCCESSS });
        }, error => dispatch({ type: SIGNUP_FAIL, payload: error.data }))
    }
}

const initialState = {
    account: '',
    token: '',
    isRequesting: false
};

export default function(state = initialState, action) {
    switch(action.type) {
    case LOGIN_REQUEST:
        return { ...state, isRequesting: true };
    case LOGIN_SUCCESS:
        axios.defaults.headers.common['Authorization'] = `Bearer ${ action.payload.token }`;
        return { ...state, ...action.payload, errorMessage: '', isRequesting: false };
    case LOGIN_FAIL:
        return { ...state, errorMessage: action.payload.message, isRequesting: false };
    default:
        return state;
    }
}