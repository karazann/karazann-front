import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const initialState = {
    loggedIn: localStorage.getItem('token') ? true : false,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                loggedIn: false,
                error: action.payload.error,
                loading: false
            }
            case LOGIN_REQUEST:
            return {
                ...state,
                error: null,
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
                error: action.payload.error,
                loading: false
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false,
                error: null
            }
        default:
            return state
    }
}