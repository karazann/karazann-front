import { connect } from 'react-redux'
import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Body from './Body'
import Header from './Header/Header'
import Navigation from './Nav/Nav'

import HomePage from './Home/HomePage'
import ProjectPage from './Project/ProjectPage'

import '../assets/scss/style.scss'
import './App.scss'
import Dialog from './Dialog/Dialog';
import { TOGGLE_NEW_DIALOG } from '../constants/action-types';

const App = ({ darkTheme, newDialogOpened, toggleNewDialog }) => {
	return (
		<Fragment>
			<Dialog opened={newDialogOpened} onToggle={toggleNewDialog} title='test' />
			<Body dark={darkTheme} /*error={this.props.hasError}*/>
				<div className="grid" >
					<Header />
					<main>
						<Navigation />
						<Switch>
							<Route exact path='/' component={HomePage} />
							<Route path='/projects' component={ProjectPage} />
							{/*<Route path='/auth/:action' component={AuthPage} />*/}
							{/*<Route path='/product/:slug' component={ProductPage} />*/}
							{/*<PrivateRoute path='/account' loggedIn={this.props.loggedIn} component={AccountPage} />*/}
							<Route path='/404' render={() => (<div>404</div>)} />
							<Route render={() => (<Redirect to='/404' />)} />
						</Switch>
					</main>
					<footer></footer>
				</div>
			</Body>
		</Fragment>
	)
}

const mapStateToProps = state => {
	return {
		darkTheme: state.ui.darkTheme,
		newDialogOpened: state.ui.newDialogOpened
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleNewDialog: e => {
			e.preventDefault()
			dispatch({ type: TOGGLE_NEW_DIALOG })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
