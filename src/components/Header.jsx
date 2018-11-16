import React, { Fragment, } from 'react'
import SearchBar from './SearchBar'
import { NavLink, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Header = props => {
    let tagPath = '/product/1234' == window.location.pathname

    let className = tagPath ? 'navbar top' : 'navbar'
    return (
        <Fragment>
            <div className="alert hidden">Whoops</div>
            <nav className={className}>
                <div className='container'>

                    <div className='brand float-left'>
                        <NavLink to='/'>
                            <img src="./logo-white.svg" alt="" />
                            <h1>Karazann.</h1>
                        </NavLink>
                    </div>

                    <Route exact path="/" component={SearchBar}></Route>

                    <div className="menu  float-right">
                        <NavLink className="btn" to='/auth/login'>Login</NavLink>
                    </div>

                </div>
            </nav>
        </Fragment>
    )

}

export default Header