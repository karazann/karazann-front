import React from "react"
import { render } from "react-dom"
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'

import { store, history } from '@store'
import { App } from '@containers'

//TODO: Eat some 🍕🍕
let root;
const renderApp = () => {
    root = render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path="/" component={App} />
            </ConnectedRouter>
        </Provider>, document.getElementById("app")
    )
}

renderApp()


//🔥🔥 Relaod
if (module.hot) {
    require('preact/debug');
    module.hot.accept('./containers/App', () => requestAnimationFrame(renderApp))
}