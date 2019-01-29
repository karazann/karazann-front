import React from 'react'
import { NavLink } from 'react-router-dom'

import './Nav.scss'

import projects from '../../assets/images/folder.svg'
import compass from '../../assets/images/compass.svg'
import discover from '../../assets/images/discover.svg'

const Navigation = props => {
    return (
        <nav className="navigation">
            <ul className="menu">
                <li>
                    <NavLink activeStyle={{ color: '#4285F4' }} exact to="/">
                        <img src={discover} />
                        <p>Discover</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={{ color: '#4285F4' }} exact to="/projects">
                        <img src={projects} />
                        <p>Projects</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation