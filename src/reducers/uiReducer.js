import { SET_DEFAULT_BACKGROUND, SET_BLUE_BACKGROUND } from '../actions/types'

const initialState = {
    isBlue: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DEFAULT_BACKGROUND:
            return {
                ...state,
                isBlue: false
            }
        case SET_BLUE_BACKGROUND:
            return {
                ...state,
                isBlue: true
            }
        default:
            return state;
    }
}