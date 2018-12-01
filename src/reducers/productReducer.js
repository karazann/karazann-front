import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    SET_FILTER,
    SELECT_PRODUCT,
    UNSELECT_PRODUCT
} from '../actions/types'

const initialState = {
    items: [],
    selected: '',
    loading: false,
    error: null,
    filter: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: action.payload.slug
            }
        case SET_FILTER:
            return {
                ...state,
                filter: action.payload.filter
            }
        case FETCH_PRODUCT_REQUEST:
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
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state;
    }
}