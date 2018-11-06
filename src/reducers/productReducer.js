import { FETCH_PRODUCT_SUCCESS } from '../actions/types'

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCT_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}