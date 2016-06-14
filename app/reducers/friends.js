import axios from 'axios';
import URL from '../utils/URL.js';

export const GET_FRIENDS_REQUEST = 'GET_FRIENDS_REQUEST';
export const GET_FRIENDS_SUCCESS = 'GET_FRIENDS_SUCCESS';
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL';

export const getFriends = () => {
    return dispatch => {
        dispatch({ type: GET_FRIENDS_REQUEST });
        return axios
        .get(`${ URL }/api/friends`)
        .then(res => {
            dispatch({ type: GET_FRIENDS_SUCCESS, payload: res.data });
        }, error => dispatch({ type: GET_FRIENDS_FAIL, payload: error.data }))

    }
}

const initialState = {
    isRequesting: false,
    list: []
};

export default function(state = initialState, action) {
    switch(action.type) {
    case GET_FRIENDS_REQUEST:
        return { ...state, isRequesting: true };
    case GET_FRIENDS_SUCCESS:
        return { list: action.payload, errorMessage: '', isRequesting: false };
    case GET_FRIENDS_FAIL:
        return { list: [], errorMessage: action.payload.message, isRequesting: false };
    default:
        return state;
    }
}