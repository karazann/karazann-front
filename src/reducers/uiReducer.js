import { SET_DEFAULT_BACKGROUND, SET_BLUE_BACKGROUND } from '../actions/types'

const initialState = {
    isMobile: window.innerWidth <= 768,
    screenWidth: typeof window === 'object' ? window.innerWidth : null,
    isBlue: false,
    isMobileNavActive: false,
    isHeaderActive: true,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SCREEN_RESIZE':
            return {
                ...state,
                isMobile: action.payload <= 768,
                screenWidth: action.payload
            }
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
            return state
    }
}