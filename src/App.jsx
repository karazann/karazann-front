import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import BodyColor from './components/BodyColor'
import Header from './components/Header'
import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'

import './scss/style.scss'

class App extends Component {

    render() {
        return (
            <Switch>
                <BodyColor isBlue={this.props.isBlue}>
                    <Header />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={LoginPage} />
                </BodyColor>
            </Switch>
        );
    }
}

const mapStateToProps = state => {
    return {
        isBlue: state.ui.isBlue
    }
}

export default connect(mapStateToProps)(App);