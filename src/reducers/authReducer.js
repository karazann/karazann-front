import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

let token = localStorage.getItem('token')

const initialState = token ? { loggedIn: true, loading: false } : { loggedIn: false, loading: false }

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
                loggedIn: false
            }
        default:
            return state
    }
}