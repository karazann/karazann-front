import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'

import Body from './Body'
import Header from './Header/Header'

import HomePage from './Home/HomePage'
import AuthPage from './Auth/AuthPage'
import ProductPage from './Product/ProductPage'
import AccountPage from './Account/AccountPage'

import { fetchProducts } from '../actions/productActions'

import '../assets/scss/style.scss'

class App extends Component {

	render() {
		return (
			<Body isBlue={this.props.isBlue} error={this.props.hasError}>
				<Header search={this.props.search} loggedIn={this.props.loggedIn} mobileNavOpen={this.props.mobileNavOpen} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/auth/:action' component={AuthPage} />
					<Route path='/product/:slug' component={ProductPage} />
					<PrivateRoute path='/account' loggedIn={this.props.loggedIn} component={AccountPage} />
					<Route path='/404' render={() => (<div>404</div>)} />
					<Route render={() => (<Redirect to='/404' />)} />
				</Switch>
			</Body>
		)
	}
}

const mapStateToProps = state => {
	return {
		isBlue: state.ui.isBlue,
		search: state.ui.search,
		loggedIn: state.auth.loggedIn,
		mobileNavOpen: state.ui.mobileNavOpen,
		hasError: state.auth.error
	}
}

export default connect(mapStateToProps)(App)
