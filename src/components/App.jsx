import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import BodyColor from './BodyColor'
import HomePage from './Home/HomePage'
import AuthPage from './Auth/AuthPage'
import Header from './Header'

import { fetchProducts } from '../actions/productActions'

import '../scss/style.scss'

class App extends Component {

    
    componentWillMount() {
        this.props.dispatch(fetchProducts())
    }

    render() {
        return (
            <Switch>
                <BodyColor isBlue={this.props.isBlue}>
                    <Header />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/auth' component={AuthPage} />
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