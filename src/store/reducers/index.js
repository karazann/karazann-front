import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user.reducer'
import ui from './ui.reducer'

export default history => {
    return combineReducers({
        router: connectRouter(history),
        user: user,
        ui: ui
    })
}