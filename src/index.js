import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { fetchProducts } from './actions/productActions'

import {store, history} from './store'

import App from './App'

store.dispatch(fetchProducts())

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </ConnectedRouter>
    </Provider>, document.getElementById("app"));