const apiUrl = process.env.API_URL ? process.env.API_URL : ''

export const signup = async (username, email, password) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
    }

    try {
        const response = await fetch(apiUrl + '/user/signup', options)
        const body = await handleResponse(response);
        console.log(body)
    } catch(e) {
        console.log(e)
    }
    
    
    //localStorage.setItem('token', body.token)
    //return res;
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

const handleResponse = async (response) => {

    if (!response.ok) {
        if (response.status === 401 || 400 || 404 || 500)
            throw { err: response.statusText, status: response.status }
    }

    return await response.json()
}