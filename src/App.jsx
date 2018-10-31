import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation dark="true"/>
                </div>
            </Router>
        );
    }
}

export default App