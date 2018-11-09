import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'


import { store, history } from './store'

import App from './components/App'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/" component={App} />
        </ConnectedRouter>
    </Provider>, document.getElementById("app"));