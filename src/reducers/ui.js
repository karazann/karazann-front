import { TOGGLE_THEME, TOGGLE_NEW_DIALOG, TOGGLE_AVATAR_DROPDOWN } from '../constants/action-types'

const initialState = {
    darkTheme: true,
    avatarDropdownOpened: false,
    newDialogOpened: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            }
        case TOGGLE_AVATAR_DROPDOWN:
            return {
                ...state,
                avatarDropdownOpened: !state.avatarDropdownOpened
            }
        case TOGGLE_NEW_DIALOG:
            return {
                ...state,
                newDialogOpened: !state.newDialogOpened
            }
        default:
            return state
    }
}