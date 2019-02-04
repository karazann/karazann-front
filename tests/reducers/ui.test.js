import reducer from '../../src/reducers/ui'
import { TOGGLE_THEME, TOGGLE_AVATAR_DROPDOWN, TOGGLE_NEW_DIALOG } from '../../src/constants/action-types';

const initialState = {
    darkTheme: true,
    avatarDropdownOpened: false,
    newDialogOpened: false
}

describe('UI reducer tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle TOGGLE_THEME', () => {
        const action = {
            type: TOGGLE_THEME
        }
        expect(reducer(initialState, action)).toEqual({ ...initialState, darkTheme: false })
    })

    it('should handle TOGGLE_AVATAR_DROPDOWN', () => {
        const action = {
            type: TOGGLE_AVATAR_DROPDOWN
        }
        expect(reducer(initialState, action)).toEqual({ ...initialState, avatarDropdownOpened: true })
    })

    it('should handle TOGGLE_NEW_DIALOG', () => {
        const action = {
            type: TOGGLE_NEW_DIALOG
        }
        expect(reducer(initialState, action)).toEqual({ ...initialState, newDialogOpened: true })
    })
})