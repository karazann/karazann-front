import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

let token = localStorage.getItem('token')

const initialState = token ? { loggedIn: true } : {loggedIn: false}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            return {
                loggedIn: true
            }
        case LOGIN_FAILURE:
            return {
                loggedIn: false,
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