import React from 'react'
import { NotificationMenu, Counter } from './style'

const NotificationMenuComponent = props => {
    const { count, onClick } = props
    const zero = count == 0
    const over = count >= 10
    return (
        <NotificationMenu onClick={onClick} active={!zero}>
            <Counter active={!zero} over={over}>{(over ? '9+' : count)}</Counter>
        </NotificationMenu>
    )
}

export default NotificationMenuComponent