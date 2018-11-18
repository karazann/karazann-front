import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'

import { login, register, loginGoogle } from '../../actions/userActions'

import AuthForm from './AuthForm'

let LoginForm = ({ dispatch }) => {
    const clientId = "321131066814-02msnaku7ue8dm40n4ic5v14lhmmp1u1.apps.googleusercontent.com"

    return (
        <AuthForm onSubmit={({ email, password }) => dispatch(login(email, password))}>
            <legend>Login</legend>
            <input id="email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" placeholder="Email" required />
            <input id="password" name="password" type="password" placeholder="Password" required />
            <button type="submit" className="btn green">Login</button>
            <GoogleLogin
                onSuccess={res => dispatch(loginGoogle(res.accessToken))}
                clientId={clientId}
                render={renderProps => (
                    <button className="btn google" onClick={renderProps.onClick}>
                        <img src="../../g-logo.png" alt="" />Continue with Google
                    </button>
                )} />
        </AuthForm>
    )
}

let RegisterForm = ({ dispatch }) => {

    const clientId = "321131066814-02msnaku7ue8dm40n4ic5v14lhmmp1u1.apps.googleusercontent.com"

    const submit = (json) => {
        console.log(json)
    }

    return (
        <AuthForm onSubmit={({ username, email, password }) => dispatch(register(username, email, password))}>
            <legend>Register</legend>
            <input id="username" name="username" type="text" placeholder="Username" required />
            <input id="email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" placeholder="Email" required />
            <input id="password" name="password" type="password" placeholder="Password" required />
            <input className="btn green" type="submit" value="Register" />
            <GoogleLogin
                onSuccess={res => dispatch(loginGoogle(res.accessToken))}
                clientId={clientId}
                render={renderProps => (
                    <button className="btn google" onClick={renderProps.onClick}>
                        <img src="../../g-logo.png" alt="" />Continue with Google
                    </button>
                )} />
        </AuthForm>
    )
}

class AuthPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'SET_BLUE_BACKGROUND' })
        this.props.dispatch({ type: 'SET_HEADER_STATE', payload: false })
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_DEFAULT_BACKGROUND' })
        this.props.dispatch({ type: 'SET_HEADER_STATE', payload: true })
    }

    render() {
        return (
            <section className="page">
                <div className="container">
                    <Switch>
                        <Route path='/auth/login' component={LoginForm} />
                        <Route path='/auth/register' component={RegisterForm} />
                    </Switch>
                </div>
            </section>
        )
    }
}
//Hello my frind
const mapStateToProps = state => {
    return {

    }
}

LoginForm = connect()(LoginForm)
RegisterForm = connect()(RegisterForm)

export default connect(mapStateToProps)(AuthPage)