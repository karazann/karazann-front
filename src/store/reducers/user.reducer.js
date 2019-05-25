import { 
    USER_SIGNUP_REQUEST, 
    USER_SIGNUP_SUCCESS, 
    USER_SIGNUP_FAIL, 

    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNIN_FAIL, 

    USER_LOGOUT 
} from '@store/constants'

const initialState = {
    loggedIn: /* localStorage.getItem('token') ? true : false*/ true,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_SIGNUP_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        case USER_SIGNUP_FAIL:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
                loading: false
            }
        case USER_SIGNIN_REQUEST:
            return {
                ...state,
                error: null,
                loading: true
            }
        case USER_SIGNIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                loading: false
            }
        case USER_SIGNIN_FAIL:
            return {
                ...state,
                loggedIn: false,
                error: action.payload,
                loading: false
            }
        case USER_LOGOUT:
            return {
                ...state,
                loggedIn: false,
                error: null
            }
        default:
            return state
    }
}