import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import productReducer from './productReducer'

export default history => {
    return combineReducers({router: connectRouter(history), products: productReducer})
}