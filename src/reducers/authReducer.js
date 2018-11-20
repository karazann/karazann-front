import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                loading: false,
                error: action.payload.error
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}