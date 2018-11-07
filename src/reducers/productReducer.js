import { FETCH_PRODUCT_BEGIN, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED, SET_FILTER } from '../actions/types'

const initialState = {
    items: [],
    loading: false,
    error: null,
    filter: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }
        case FETCH_PRODUCT_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.products
            }
        case FETCH_PRODUCT_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}