import { connect } from 'react-redux'
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Body from './Body'
import HomePage from './Home/HomePage'
import AuthPage from './Auth/AuthPage'
import ProductPage from './Product/ProductPage'
import Header from './Header'

import { fetchProducts } from '../actions/productActions'

import '../assets/scss/style.scss'

class App extends Component {

	componentWillMount() {
		this.props.dispatch(fetchProducts())
	}

	render() {
		return (
			<Switch>
				<Body isBlue={this.props.isBlue} error={this.props.hasError}>
					<Header />
					<Route exact path='/' component={HomePage} />
					<Route path='/auth' component={AuthPage} />
					<Route path='/product/:id' component={ProductPage}/>
				</Body>
			</Switch>
		);
	}
}

const mapStateToProps = state => {
	return {
		isBlue: state.ui.isBlue,
		hasError: state.auth.error
	}
}

export default connect(mapStateToProps)(App)
