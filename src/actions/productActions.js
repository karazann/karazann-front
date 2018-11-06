import { FETCH_PRODUCT_SUCCESS } from './types'
import axios from 'axios';

const initialState = [
    { title: 'Apple iPhone X', image: './iphonex.png', progress: 89 },
    { title: 'Xbox One X', image: './xboxx.png', progress: 23 },
    { title: 'Apple Watch S4', image: './awatch.png', progress: 19 },
    { title: 'Huawei P20 Lite', image: './huawei.png', progress: 19 },
    { title: 'PS4 Pro', image: './ps4.png', progress: 56 },
    { title: 'Apple Airpods', image: './airpods.png', progress: 71 },
    { title: '3 Month Xbox Live', image: './xboxlive.png', progress: 33 }
]


const fetchProductsSuccess = products => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: products
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

export const fetchProducts = () => {
    return (dispatch) => {
        return setTimeout(()=>dispatch(fetchProductsSuccess(initialState)), 3000)
    }
}