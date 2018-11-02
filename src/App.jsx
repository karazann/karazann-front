import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navigation from './components/Navigation'
import Header from './components/Header'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation dark="true" />
                    <Header />
                </div>
            </Router>
        );
    }
}

export default App