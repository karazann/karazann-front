import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT
} from './types'

const baseUrl = "http://localhost:3000/v1"

const registerRequest = () => {
    return { type: REGISTER_REQUEST }
}

const registerSuccess = user => {
    return { type: REGISTER_SUCCESS, payload: { user } }
}

const registerFailure = error => {
    return { type: REGISTER_FAILURE, payload: { error } }
}

const loginRequest = () => {
    return { type: LOGIN_REQUEST }
}

const loginSuccess = user => {
    return { type: LOGIN_SUCCESS, payload: { user } }
}

const loginFailure = error => {
    return { type: LOGIN_FAILURE, payload: { error } }
}

export const logout = () => {
    localStorage.removeItem('user')
    return { type: LOGOUT }
}

/**********  Async actions  **********/

export const register = (username, email, password) => {
    return dispatch => {
        dispatch(registerRequest())

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        }

        fetch(baseUrl + '/auth/register', options)
            .then(user => {
                dispatch(registerSuccess(user))
            })
            .catch(error => dispatch(registerFailure(error)))
    }
}

export const login = (email, password) => {
    return dispatch => {
        dispatch(loginRequest())

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }

        console.log(options)

        fetch(baseUrl + '/auth/login', options)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(loginSuccess(user))
            })
            .catch(error => dispatch(loginFailure(error)))
    }
}

export const loginGoogle = (accessToken) => {
    return dispatch => {
        dispatch(loginRequest())

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ access_token: accessToken })
        }

        fetch(baseUrl + '/auth/google', options)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(loginSuccess(user))
            })
            .catch(error => dispatch(loginFailure(error)))
    }
}