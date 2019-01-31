import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import logo from '../../assets/images/logo2.svg'
import search from '../../assets/images/search.svg'
import avatar from '../../assets/images/avatar.jpg'

import Avatar from './Avatar/Avatar'

import { TOGGLE_NEW_DIALOG } from '../../constants/action-types';

import './Header.scss'

const Header = ({ toggleNewDialog }) => {
    return (
        <Fragment>
            <header></header>
            <nav>
                <div className="brand">
                    <NavLink to="/">
                        <img src={logo} alt="karazann" />
                        <h3>Karazann</h3>
                    </NavLink>
                </div>
                <section className="navbar">
                    <div className="search">
                        <div className="bar">
                            <input type="text" placeholder="Search Project" className="input" />
                            <img src={search} />
                        </div>
                        <div className="dropdown">

                        </div>
                        <div className='overlay'>

                        </div>
                    </div>

                    <div className="nav-right">
                        <button className="btn-new" onClick={toggleNewDialog}><i className="fas fa-plus"></i> Create</button>
                        <Avatar image={avatar} name='Jordan' />
                    </div>
                </section>
            </nav>
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        avatarDropdownOpened: state.ui.avatarDropdownOpened,
        newDialogOpened: state.ui.newDialogOpened
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleNewDialog: () => { dispatch({ type: TOGGLE_NEW_DIALOG }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)