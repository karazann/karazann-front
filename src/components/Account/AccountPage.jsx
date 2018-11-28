import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Condition from './Condition'

import './AccountPage.scss'

const Menu = () => {
    return (
        <div className='col-12 col-md-3'>
            <div className='account-menu'>
                <NavLink to='/account/profile'>Profile</NavLink>
                <NavLink to='/account/balance'>Balance</NavLink>
                <NavLink to='/account/settings'>Settings</NavLink>
            </div>
        </div>
    )
}

const SettingsPage = props => {
    return (
        <div className='col-12 col-md-9'>
            <div className="account-page">
                <NavLink className='res' to='/account'>Back</NavLink>
                settings
            </div>
        </div>
    )
}

const ProfilePage = props => {
    return (
        <div className='col-12 col-md-9'>
            <div className='account-page'>
                <NavLink className='res' to='/account'>Back</NavLink>
                profile
        </div>
        </div>
    )
}

class AccountPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        this.props.dispatch({ type: 'SET_HEADER_STATE', payload: false })
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_HEADER_STATE', payload: true })
    }

    render() {
        return (
            <section className='page'>
                <div className='container'>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <div id='account-header' className='header-2'>
                                <div><svg xmlns="http://www.w3.org/2000/svg" overflow='visible' strokeWidth="3" width="20" height="20" viewBox="0 0 24 24"><path fill="white" d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z" /></svg></div>
                                <h2>My Account</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <Condition is={!this.props.mobile}>
                            <Route exact path='/account' component={Menu} />
                        </Condition>
                        <Condition is={this.props.mobile}>
                            <Route component={Menu} />
                            <Route exact path='/account' render={() => (<Redirect to='/account/profile' />)} />
                        </Condition>
                        <Switch>
                            <Route path='/account/profile' component={ProfilePage} />
                            <Route path='/account/settings' component={SettingsPage} />
                        </Switch>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        mobile: state.ui.isMobile
    }
}

export default connect(mapStateToProps)(AccountPage)