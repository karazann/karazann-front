import React, { Component } from 'react'
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Condition from './Condition'
import ContentHeader from '../ContentHeader'

import account from '../../assets/images/account.svg'
import style from './AccountPage.scss'
console.log(style)

const Menu = () => {
    return (
        <div className="account-menu-container">
            <nav className={'account-menu'}>
                <NavLink to='/account/profile'>Profile</NavLink>
                <NavLink to='/account/balance'>Balance</NavLink>
                <NavLink to='/account/settings'>Settings</NavLink>
            </nav>
        </div>
    )
}

const SettingsPage = props => {
    return (
        <div className="account-page-container">
            <section className="account-page">
                <NavLink className='res' to='/account'>Back</NavLink>
                settings
            </section>
        </div>
    )
}

const ProfilePage = props => {
    return (
        <div className="account-page-container">
            <section className='account-page'>
                <NavLink className='res' to='/account'>Back</NavLink>
                profile
            </section>
        </div>
    )
}

const BalancePage = props => {
    return (
        <div className="account-page-container">
            <section className='account-page'>
                <NavLink className='res' to='/account'>Back</NavLink>
                balance
            </section>
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
                <ContentHeader title='Account' img={account} />
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
                        <Route path='/account/balance' component={BalancePage} />
                        <Route path='/account/settings' component={SettingsPage} />
                    </Switch>
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