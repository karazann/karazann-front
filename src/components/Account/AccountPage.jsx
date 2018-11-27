import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Condition from './Condition'

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
                            <h4 className='header'>My Account</h4>
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