import { SET_DEFAULT_BACKGROUND, SET_BLUE_BACKGROUND } from '../actions/types'

const initialState = {
    isBlue: false,
    isMobileNavActive: false,
    isHeaderActive: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_HEADER_STATE':
            return {
                ...state,
                isHeaderActive: action.payload
            }
        case 'TOGGLE_MOBILE_NAV': 
            return {
                ...state,
                isMobileNavActive: !state.isMobileNavActive
            }
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