import React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from './utils/store'
import App from './containers/App'

//TODO: Eat some 🍕🍕
function renderApp() {
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path="/" component={App} />
            </ConnectedRouter>
        </Provider>, document.getElementById("app")
    )
}

renderApp()

//🔥🔥 Relaod
module.hot.accept(renderApp)