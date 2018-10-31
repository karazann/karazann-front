import React, { PureComponent } from 'react'
import '../scss/style.scss'

class Navigation extends PureComponent {
    render() {
        return (
            <nav className="navbar dark">
                <div className="container">
                    
                    <div className="brand">
                        <h1>Karazann.</h1>
                    </div>
                    
                    {/*<div className="search d-none d-md-block">
                        <input placeholder="Type something do you need..." type="text" />
                    </div>*/}
                    
                    <div className="menu d-none d-md-block">
                        <a href="#">Sign up</a>
                    </div>

                    <section className="hamburger d-block d-md-none">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </section>

                    <section className="menu-mobile-popup d-none" id="popup" >
                        <div className="menu-mobile-element">dsda</div>
                        <div className="menu-mobile-element">dsda</div>
                    </section>
                </div>
            </nav>
        )
    }
}

export default Navigation