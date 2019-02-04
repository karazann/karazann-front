import React from 'react'
import { Header } from '../../src/components/Header/Header'
import AvatarConnected from '../../src/components/Header/Avatar/Avatar2'
import { createMockStore } from 'redux-test-utils'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import Enzyme, { shallow, render, mount } from 'enzyme'


export const mountWithRouterAndStore = (Component, storeState = {}) => {
    const store = createMockStore(storeState)

    return shallow(<Provider store={store}><MemoryRouter initialEntries={['/']} initialIndex={0}><Header /></MemoryRouter></Provider>)
}

describe('<Header /> component tests', () => {

    test('should render a Avatar', () => {
        const root = shallow(<Header />);
        expect(root.find(AvatarConnected).exists()).toBe(true)
    })

    test('with store', () => {
        //store.dispatch(actions.loadUser({ userId: 1, name: 'Kumar' }));
        const root = mountWithRouterAndStore({ ui: { darkTheme: false } })
        //root.find('btn-new').simulate('click')
        root.find(Header).find('.btn-new').simulate('click')
    })

    it('should execute toggleNewDialog whe click on new button', () => {
        const toggleDialog = jest.fn()
        const root = shallow(<Header toggleNewDialog={toggleDialog} />)
        root.find('.btn-new').simulate('click')
        expect(toggleDialog).toHaveBeenCalledTimes(1)
    })
})