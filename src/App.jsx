import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'

class App extends Component {
    render() {
        return (
            <Switch>
                <Fragment>
                    <Header />
                    <Route exact path='/' component={Home}/>
                </Fragment>
            </Switch>
        );
    }
}

export default App