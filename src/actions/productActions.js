import {
    FETCH_PRODUCT_BEGIN,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILED
} from './types'

export const fetchProductsBegin = () => {
    return {
        type: FETCH_PRODUCT_BEGIN
    }
}

export const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: {
            products
        }
    }
}

export const fetchProductsFailed = error => {
    return {
        type: FETCH_PRODUCT_FAILED,
        payload: {
            error
        }
    }
}

/* 
    axios.get(apiUrl)
            .then(response => {
                dispatch(fetchProductsSuccess(response.data))
            })
            .catch(error => {
                throw error
            })
*/

/*fetch('/')
            .then(res => res.json())
            .then(products => dispatch(fetchProductsSuccess([
                { title: 'Apple iPhone X', image: './iphonex.png', progress: 89 },
                { title: 'Xbox One X', image: './xboxx.png', progress: 23 },
                { title: 'Apple Watch S4', image: './awatch.png', progress: 19 },
                { title: 'Huawei P20 Lite', image: './huawei.png', progress: 19 },
                { title: 'PS4 Pro', image: './ps4.png', progress: 56 },
                { title: 'Apple Airpods', image: './airpods.png', progress: 71 },
                { title: '3 Month Xbox Live', image: './xboxlive.png', progress: 33 }
            ])))
            .catch(error => dispatch(fetchProductsFailed(error)))
*/

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsBegin())
        return setTimeout(() => {
            dispatch(fetchProductsSuccess([
                { title: 'Apple iPhone X', image: './iphonex.png', progress: 89 },
                { title: 'Xbox One X', image: './xboxx.png', progress: 23 },
                { title: 'Apple Watch S4', image: './awatch.png', progress: 19 },
                { title: 'Huawei P20 Lite', image: './huawei.png', progress: 19 },
                { title: 'PS4 Pro', image: './ps4.png', progress: 56 },
                { title: 'Apple Airpods', image: './airpods.png', progress: 71 },
                { title: '3 Month Xbox Live', image: './xboxlive.png', progress: 33 }
            ]))
        }, 1000)
    }
}