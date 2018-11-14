import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,

    LOGOUT
} from './types'

var baseURL = "http://localhost:3000/v1";

const request = () => {
    return { type: LOGIN_REQUEST }
}

const success = user => {
    return { type: LOGIN_SUCCESS, payload: { user } }
}

const failure = error => {
    return { type: LOGIN_FAILURE, payload: { error } }
}


export const logout = () => {
    localStorage.removeItem('user')
    return { type: LOGOUT }
}

/**********  Async actions  **********/

export const login = (email, password) => {
    return dispatch => {
        dispatch(request())

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }

        console.log(options)

        fetch(baseURL + '/auth/login', options)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(success(user))
            })
            .catch(error => dispatch(failure(error)))
    }
}

export const loginGoogle = (accessToken) => {
    return dispatch => {
        dispatch(request())

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ access_token: accessToken })
        }

        fetch(baseURL + '/auth/google', options)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(success(user))
            })
            .catch(error => dispatch(failure(error)))
    }
}

export const register = (email, name, password) => {
    return dispatch => {

    }
}