import React, { PureComponent } from 'react'

import '../scss/style.scss'

import SearchBar from './SearchBar'

class Navigation extends PureComponent {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <div className="brand float-left">
                        <h1>Karazann.</h1>
                    </div>
                    <SearchBar />
                </div>
            </nav>
        )
    }
}

export default Navigation