import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import project from './project'
import ui from './ui'

export default history => {
    return combineReducers({
        router: connectRouter(history),
        auth: auth,
        projects: project,
        ui: ui
    })
}

export const testReducers = () => {
    return combineReducers({
        auth: auth,
        projects: project,
        ui: ui
    })
}