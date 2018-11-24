import { authHeader } from '../utils/header'

const apiUrl = process.env.API_URL

const register = (username, email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    }

    return fetch(apiUrl + '/auth/register', options)
        .then(handleResponse)
        .then(response => localStorage.setItem('token', response.token))
}

const login = (email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(apiUrl + '/auth/login', options)
        .then(handleResponse)
        .then(response => localStorage.setItem('token', response.token))
}

const loginGoogle = (accessToken) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: accessToken })
    }

    return fetch(apiUrl + '/auth/google', options)
        .then(handleResponse)
        .then(response => localStorage.setItem('token', response.token))
}

const logout = () => {
    localStorage.removeItem('token');
}

const fecthProducts = () => {
    const options = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(apiUrl + '/product', options)
        .then(handleResponse)
        .then(response => response.products)
}

const handleResponse = (response) => {
    return response.json().then(data => {
        if (!response.ok) {
            if (response.status === 401)
                logout()

            return Promise.reject(data)
        }
        return data
    })
}

export default {
    login,
    loginGoogle,
    register,
    logout,
    fecthProducts
}
