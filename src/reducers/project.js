import { } from '../constants/action-types'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case '':
            return {
                ...state,

            }
        default:
            return state
    }
}