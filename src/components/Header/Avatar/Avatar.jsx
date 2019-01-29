import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import { TOGGLE_THEME, TOGGLE_AVATAR_DROPDOWN } from '../../../constants/action-types'

import './Avatar.scss'

const Avatar = ({ image, name, darkTheme, toggleTheme, toggleDropdown, opened}) => {

    return (
        <div className='avatar'>
            <a href='' onClick={toggleDropdown}>
                <section>
                    <img src={image} />
                    <span></span>
                </section>
                <p>{name}</p>
                <CSSTransition in={opened} timeout={200} classNames='roll'>
                    <i className='fas fa-angle-down'></i>
                </CSSTransition>
            </a>

            <CSSTransition in={opened} unmountOnExit mountOnEnter timeout={200} classNames='move'>
                <div className='dropdown'>
                    <ul>
                        <li><a href='' onClick={toggleTheme}>{darkTheme ? 'Light Theme' : 'Dark Theme'}</a></li>
                        <li><a href=''>Sign Out</a></li>
                    </ul>
                </div>
            </CSSTransition>

            <CSSTransition in={opened} unmountOnExit mountOnEnter timeout={200} classNames='fade'>
                <div className='overlay' onClick={toggleDropdown}></div>
            </CSSTransition>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        darkTheme: state.ui.darkTheme,
        opened: state.ui.avatarDropdownOpened
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTheme: e => {
            e.preventDefault()
            dispatch({ type: TOGGLE_THEME })
        },
        toggleDropdown: e => {
            e.preventDefault()
            dispatch({ type: TOGGLE_AVATAR_DROPDOWN })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar)