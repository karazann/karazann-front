import { authHeader } from './node_modules/@libs/header'
const apiUrl = process.env.API_URL

export const register = (username, email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    }

    return fetch(apiUrl + '/auth/register', options)
        .then(handleResponse)
        .then(response => {
            localStorage.setItem('token', response.token)
            return response
        })
}

export const login = (email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(apiUrl + '/auth/login', options)
        .then(handleResponse)
        .then(response => {
            localStorage.setItem('token', response.token)
            return response
        })
}

export const loginGoogle = (accessToken) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: accessToken })
    }

    return fetch(apiUrl + '/auth/google', options)
        .then(handleResponse)
        .then(response => {
            localStorage.setItem('token', response.token)
            return response
        })
}

const handleResponse = (response) => {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401 || 400)
                logout()

            return Promise.reject(data)
        }
        return data
    })
}