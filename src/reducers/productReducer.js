const initialState = [
    { title: 'Apple iPhone X', image: './iphonex.png', progress: 89 },
    { title: 'Xbox One X', image: './xboxx.png', progress: 23 },
    { title: 'Apple Watch S4', image: './awatch.png', progress: 19 },
    { title: 'Huawei P20 Lite', image: './huawei.png', progress: 19 },
    { title: 'PS4 Pro', image: './ps4.png', progress: 56 },
    { title: 'Apple Airpods', image: './airpods.png', progress: 71 },
    { title: '3 Month Xbox Live', image: './xboxlive.png', progress: 33 }
]

export default (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}