import React, { Component, Fragment } from 'react'
import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const customStyles = {
    indicatorSeparator: style => null,
    option: style => ({
        ...style,
        padding: '8px',
        borderBottom: 'none',
    }),
    menu: style => ({
        ...style,
        top: '39px',
        transition: '.3s',
        border: '2.5px solid #E6E7EC',
        borderRadius: '0 0 5px 5px',
        outline: 'none',
        boxShadow: 'none',
        background: 'white',
        zIndex: 10
    }),
    control: style => ({
        ...style,
        border: 'none',
        outline: 'none',
        boxShadow: 'none',
        border: '2.5px solid #E6E7EC',
        background: 'white',
        padding: '5px',
        zIndex: 20,
        transition: '.2s ease'
    })
}

const theme = defaults => ({
    ...defaults,
    borderRadius: '5px',
    colors: {
        ...defaults.colors,
        primary25: '#E6E7EC',
        primary: '#5BA9EF',
    },
})

class Selector extends Component {

    render() {
        return (
            <Fragment>
                <h4>Hello</h4>
                <Select
                    isSearchable={false}
                    styles={customStyles}
                    options={options}
                    defaultValue={options[0]}
                    theme={theme}
                />
            </Fragment>
        )
    }
}

export default Selector