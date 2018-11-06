import React, { PureComponent } from 'react'
import {NavLink} from 'react-router-dom'
import '../scss/style.scss'



class Header extends PureComponent {
    render() {
        return (
            <nav className='navbar'>
                <div className='container'>
                    <div className='brand float-left'>
                        <h1>Karazann.</h1>
                        
                    </div>
                    <NavLink  className="btn float-right" to='/login'>Login</NavLink>
                </div>
            </nav>
        )
    }
}

export default Header