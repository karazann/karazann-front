import { 
    TOGGLE_THEME, 
    OPEN_PUSH_NAV, 
    OPEN_NEW, 
    OPEN_AVATAR, 
    OPEN_NOTIFICATIONS, 
    CLOSE_ALL 
} from '@store/constants'

const initialState = {
    darkTheme: false,
    notificationsOpened: false,
    pushNavOpened: false,
    avatarOpened: false,
    inviteOpened: false,
    newOpened: false,
    overlay: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLOSE_ALL:
            return {
                ...state,
                notificationsOpened: false,
                inviteOpened: false,
                pushNavOpened: false,
                avatarOpened: false,
                newOpened: false,
                overlay: false
            }
        case 'OPEN_INVITE': 
            return {
                ...state,
                inviteOpened: true,
                overlay: true
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
                overlay: true
            }
        case OPEN_AVATAR:
            return {
                ...state,
                avatarOpened: true,
                overlay: true
            }
        case OPEN_NOTIFICATIONS:
            return {
                ...state,
                notificationsOpened: true,
                overlay: true
            }
        case OPEN_NEW:
            return {
                ...state,
                newOpened: true,
                overlay: true
            }
        default:
            return state
    }
}