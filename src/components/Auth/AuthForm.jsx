import React from 'react'
import Tilt from '../Tilt'

const AuthForm = ({ onSubmit, children }) => {
    const handleSubmit = event => {
        event.preventDefault()

        const data = new FormData(event.target)

        let object = {}
        data.forEach((value, key) => {
            object[key] = value
        })

        onSubmit(object)
    }

    return (
        <Tilt className="auth-form" options={{ max: 5 }}>
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </Tilt>
    )
}

export default AuthForm