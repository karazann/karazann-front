import {
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    SET_FILTER
} from './types'

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
        return setTimeout(() => {
            dispatch(success([
                { title: 'Apple iPhone X', image: './iphonex.png', progress: 89 },
                { title: 'Xbox One X', image: './xboxx.png', progress: 23 },
                { title: 'Apple Watch S4', image: './awatch.png', progress: 19 },
                { title: 'Huawei P20 Lite', image: './huawei.png', progress: 19 },
                { title: 'PS4 Pro', image: './ps4.png', progress: 56 },
                { title: 'Apple Airpods', image: './airpods.png', progress: 71 },
                { title: '3 Month Xbox Live', image: './xboxlive.png', progress: 33 }
            ]))
        }, 300)
    }


}

export const setFilter = filter => {
    return { type: SET_FILTER, payload: { filter } }
}