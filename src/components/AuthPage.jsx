import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import { connect } from 'react-redux'

const Login = props => {

    const handleSubmit = event => {
        event.preventDefault();
        const data = new FormData(event.target);

        let object = {};
        data.forEach( (value, key) => {
            object[key] = value;
        });

        var json = JSON.stringify(object);

        fetch('/api/form-submit-url', {
            method: 'POST',
            body: json,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Enter username</label>
            <input id="username" name="username" type="text" />

            <label htmlFor="email">Enter your email</label>
            <input id="email" name="email" type="email" />

            <label htmlFor="birthdate">Enter your birth date</label>
            <input id="birthdate" name="birthdate" type="text" />

            <button>Send data!</button>
        </form>
    )
}

const Register = props => {
    return (
        <p>Login</p>
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
                        <Route path='/auth/login' component={Login} />
                        <Route path='/auth/register' component={Register} />
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