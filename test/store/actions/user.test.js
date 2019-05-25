import {
    signupRequest,
    signupSuccess,
    signupFail,
    signinRequest,
    signinSuccess,
    signinFail,
    logout,
    signup
} from '@store/actions'
import {
    USER_SIGNUP_REQUEST,
    USER_SIGNUP_SUCCESS,
    USER_SIGNUP_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_LOGOUT
} from '@store/constants'

import {
    mockStore
} from '../../setupMockStore'
import fetchMock from 'fetch-mock'

describe('User actions', () => {

    describe('signup actions', () => {

        test('Should create an action to request signup', () => {
            const expectedAction = {
                type: USER_SIGNUP_REQUEST
            }
            expect(signupRequest()).toEqual(expectedAction)
        })

        test('Should create an action to success signup', () => {
            const expectedAction = {
                type: USER_SIGNUP_SUCCESS
            }
            expect(signupSuccess()).toEqual(expectedAction)
        })

        test('Should create an action to fail signup with error', () => {
            const errorMsg = {
                msg: 'error'
            }
            const expectedAction = {
                type: USER_SIGNUP_FAIL,
                payload: errorMsg
            }
            expect(signupFail(errorMsg)).toEqual(expectedAction)
        })

    })

    describe('signin actions', () => {

        test('Should create an action to request signin', () => {
            const expectedAction = {
                type: USER_SIGNIN_REQUEST
            }
            expect(signinRequest()).toEqual(expectedAction)
        })

        test('Should create an action to success signin', () => {
            const expectedAction = {
                type: USER_SIGNIN_SUCCESS
            }
            expect(signinSuccess()).toEqual(expectedAction)
        })

        test('Should create an action to fail signin with error', () => {
            const errorMsg = {
                msg: 'error'
            }
            const expectedAction = {
                type: USER_SIGNIN_FAIL,
                payload: errorMsg
            }
            expect(signinFail(errorMsg)).toEqual(expectedAction)
        })

    })

})

describe('Async User actions', () => {

    afterEach(() => {
        fetchMock.restore()
    })

    test('Should dispatch logout action and change location to "/"', () => {
        const expectedActions = [{
                type: USER_LOGOUT
            },
            {
                type: '@@router/CALL_HISTORY_METHOD',
                payload: {
                    method: 'push',
                    args: ['/'],
                }
            }
        ]

        const store = mockStore()

        store.dispatch(logout()).then(() => {
            // return of async actions
            const actions = store.getActions()
            expect(actions).toEqual(expectedActions)
        })
    })

    it('creates USER_SIGNUP_REQUEST when signup() success', () => {
        fetchMock.postOnce('path:/user/signup', {
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                token: 'test'
            },
        })

        const expectedActions = [{
                type: USER_SIGNUP_REQUEST
            },
            {
                type: USER_SIGNUP_SUCCESS
            },
            {
                type: '@@router/CALL_HISTORY_METHOD',
                payload: {
                    method: 'push',
                    args: ['/'],
                }
            }
        ]

        const store = mockStore({
            user: {}
        })

        store.dispatch(signup('', '', '')).then(() => {
            // return of async actions
            console.log(store.getActions());
            console.log(fetchMock.calls())
            expect(fetchMock.calls())
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

})