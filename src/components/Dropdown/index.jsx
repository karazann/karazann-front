import React, { Component } from 'react'
import { Motion, spring, presets } from 'react-motion'

import { StyledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from './style'

export { DropdownItem } from './style'

export class Dropdown extends Component {
    
    state = {
        dropdownOpen: false
    };
    
    constructor(props) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.onMouseEnter = this.onMouseEnter.bind(this)
        this.onMouseLeave = this.onMouseLeave.bind(this)
    }

    toggle() {
        this.setState(prevState => ({dropdownOpen: !prevState.dropdownOpen}))
    }

    onMouseEnter() {
        this.setState({ dropdownOpen: true })
    }

    onMouseLeave() {
        this.setState({ dropdownOpen: false })
    }

    render() {
        const { title, children } = this.props
        const { dropdownOpen } = this.state

        return (
            <StyledDropdown onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} >
                <DropdownToggle >
                    { title }
                </DropdownToggle>
                <DropdownMenu opened={dropdownOpen}>
                    <DropdownItem>Header</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Another</DropdownItem>
                    <DropdownItem>Another</DropdownItem>
                </DropdownMenu>
            </StyledDropdown>
        )
    }
}