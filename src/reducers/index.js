import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import productReducer from './productReducer'
import uiReducer from './uiReducer';

export default history => {
    return combineReducers({router: connectRouter(history), products: productReducer, ui: uiReducer})
}