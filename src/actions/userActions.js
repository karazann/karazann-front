import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT
} from './types'

import service from '../services'

import { push } from 'connected-react-router'

const registerRequest = () => {
    return { type: REGISTER_REQUEST }
}

const registerSuccess = () => {
    return { type: REGISTER_SUCCESS }
}

const registerFailure = error => {
    return { type: REGISTER_FAILURE, payload: { error } }
}

const loginRequest = () => {
    return { type: LOGIN_REQUEST }
}

const loginSuccess = () => {
    return { type: LOGIN_SUCCESS }
}

const loginFailure = error => {
    return { type: LOGIN_FAILURE, payload: { error } }
}

export const logout = () => {
    service.logout()
    return { type: LOGOUT }
}

/**********  Async actions  **********/

export const register = (username, email, password) => {
    return dispatch => {
        dispatch(registerRequest())
        service.register(username, email, password)
            .then(token => {
                dispatch(push('../'))
                dispatch(registerSuccess())
            })
            .catch(error => dispatch(registerFailure(error)))
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginRequest())
        service.login(email, password)
            .then(token => {
                dispatch(loginSuccess())
                dispatch(push('../'))
            }).catch(error => dispatch(loginFailure(error)))
    }
}

export const loginGoogle = (accessToken) => {
    return dispatch => {
        dispatch(loginRequest())
        service.loginGoogle(accessToken)
            .then(token => {
                dispatch(push('../'))
                dispatch(loginSuccess())
            }).catch(error => dispatch(loginFailure(error)))
    }
}