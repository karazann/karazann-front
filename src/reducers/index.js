import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import authReducer from './authReducer'
import productReducer from './productReducer'
import uiReducer from './uiReducer'

export default history => {
    return combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        products: productReducer,
        ui: uiReducer
    })
}