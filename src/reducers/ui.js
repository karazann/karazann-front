import { TOGGLE_THEME, OPEN_PUSH_NAV, OPEN_NEW_DIALOG, OPEN_AVATAR_DROPDOWN, CLOSE_ALL } from '../constants/action-types'

const initialState = {
    darkTheme: true,
    pushNavOpened: false,
    avatarDropdownOpened: false,
    newDialogOpened: false,
    overlayActive: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_ALL:
            return {
                ...state,
                pushNavOpened: false,
                avatarDropdownOpened: false,
                newDialogOpened: false,
                overlayActive: false
            }
        case TOGGLE_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        case OPEN_PUSH_NAV:
            return {
                ...state,
                pushNavOpened: true,
                overlayActive: true
            }
        case OPEN_AVATAR_DROPDOWN:
            return {
                ...state,
                avatarDropdownOpened: true,
                overlayActive: true
            }
        case OPEN_NEW_DIALOG:
            return {
                ...state,
                newDialogOpened: true,
                overlayActive: true
            }
        default:
            return state
    }
}