const apiUrl = process.env.API_URL

function authHeader() { }

const register = (username, email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    }

    return fetch(apiUrl + '/auth/register', options)
        .then(handleResponse)
        .then(token => localStorage.setItem('token', token))
}

const login = (email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    }

    return fetch(apiUrl + '/auth/login', options)
        .then(handleResponse)
        .then(token => localStorage.setItem('token', token))
}

const loginGoogle = (accessToken) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_token: accessToken })
    }

    return fetch(apiUrl + '/auth/google', options)
        .then(handleResponse)
        .then(token => localStorage.setItem('token', token))
}

const logout = () => {
    localStorage.removeItem('token');
}

const fecthProducts = () => {
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    }

    return fetch(apiUrl + '/products', options)
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
