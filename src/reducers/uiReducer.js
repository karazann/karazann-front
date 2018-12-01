import { SET_DEFAULT_BACKGROUND, SET_BLUE_BACKGROUND } from '../actions/types'

const initialState = {
    isMobile: window.innerWidth <= 768,
    screenWidth: typeof window === 'object' ? window.innerWidth : null,
    isBlue: false,
    mobileNavOpen: false,
    search: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SCREEN_RESIZE':
            return {
                ...state,
                isMobile: action.payload <= 768,
                screenWidth: action.payload
            }
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'TOGGLE_MOBILE_NAV': 
            return {
                ...state,
                mobileNavOpen: !state.mobileNavOpen
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