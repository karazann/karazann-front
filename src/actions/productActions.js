import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    SET_FILTER
} from './types'

import service from '../services'

export const fetchProducts = () => {

    const request = () => {
        return { type: FETCH_PRODUCT_REQUEST }
    }

    const success = products => {
        return { type: FETCH_PRODUCT_SUCCESS, payload: { products } }
    }

    const failure = error => {
        return { type: FETCH_PRODUCT_FAILURE, payload: { error } }
    }

    return dispatch => {
        dispatch(request())

        service.fecthProducts()
            .then(products => {
                console.table(products)
                dispatch(success(products))
            })
            .catch(error => dispatch(failure(error)))
    }

}

export const setFilter = filter => {
    return { type: SET_FILTER, payload: { filter } }
}