import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import AsyncRoute from 'preact-async-route'

const PrivateRoute = ({ loggedIn, ...rest }) => {
    return (
        loggedIn ? 
        <AsyncRoute {...rest} /> :
        <Redirect to='/signin' />
    )
}

export default PrivateRoute