import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

import AuthForm from './AuthForm'

const LoginForm = props => {
    return (
        <AuthForm url="/api/login">
            <legend>Sign In</legend>
            <input id="email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" placeholder="Email" required />
            <input id="password" name="password" type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
        </AuthForm>
    )
}

const RegisterForm = () => {

    return (
        <AuthForm url="/api/register">
            <legend>Sign Up</legend>
            <input id="username" name="username" type="text" placeholder="Username" required />
            <input id="email" name="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$" placeholder="Email" required />
            <input id="password" name="password" type="password" placeholder="Password" required />
            <button type="submit">Sign Up</button>
        </AuthForm>
    )
}

class AuthPage extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'SET_BLUE_BACKGROUND' })
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_DEFAULT_BACKGROUND' })
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

const mapStateToProps = state => {
    return {
        products: true
    }
}

export default connect(mapStateToProps)(AuthPage);