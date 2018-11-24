import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router'
import createReducer from '../reducers'
import thunk from 'redux-thunk';


export const history = createBrowserHistory()

export const store = createStore(
    createReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        ),
    ),
)