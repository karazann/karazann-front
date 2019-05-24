import React from 'react'

import { DropdownItem } from './style'

export const DropdownItemComponent = ({ onClick, children }) => {
    return (
        <li>
            <DropdownItem onClick={onClick}>
                {children}
            </DropdownItem>
        </li>
    )
}

export default DropdownItemComponent