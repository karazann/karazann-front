import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,

    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,

    USER_LOGOUT
} from '@store/constants'

import * as api from '../../api'

import {
    push
} from 'connected-react-router'

export const signupRequest = () => ({
    type: USER_SIGNUP_REQUEST
})

export const signupSuccess = () => ({
    type: USER_SIGNUP_SUCCESS
})

export const signupFail = error => ({
    type: USER_SIGNUP_FAIL,
    payload: error
})

export const signinRequest = () => ({
    type: USER_SIGNIN_REQUEST
})

export const signinSuccess = () => ({
    type: USER_SIGNIN_SUCCESS
})

export const signinFail = error => ({
    type: USER_SIGNIN_FAIL,
    payload: error
})

/**********  Async actions  **********/

export const logout = () => {
    return async dispatch => {
        dispatch({
            type: USER_LOGOUT
        })
        dispatch(push('/'))
    }
}

export const signup = (username, email, password) => {
    return async dispatch => {
        dispatch(signupRequest())
        try {
            await api.signup(username, email, password)
            dispatch(signupSuccess())
            dispatch(push('/'))
        } catch(e) {
            dispatch(signupFail(e))
        }
    }
}

export const login = (email, password) => {
    return async dispatch => {
        dispatch(loginRequest())
        try {
            await service.login(email, password)
            dispatch(loginSuccess())
            dispatch(push('/'))
        } catch (error) {
            dispatch(loginFailure(error))
        }
    }
}

export const loginGoogle = (accessToken) => {
    return dispatch => {
        dispatch(loginRequest())
        service.loginGoogle(accessToken)
            .then(token => {
                dispatch(push('/'))
                dispatch(loginSuccess())
            }).catch(error => dispatch(loginFailure(error)))
    }
}