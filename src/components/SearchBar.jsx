import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'
import Tilt from './Tilt'

const SearchBar = props => {


    const onChange = event => {
        props.dispatch(setFilter(event.target.value));
    }

    return (
        <Tilt className="search"  options={{ speed: 1500, scale: 1.04, max: 30,reverse: true, axis: 'y' }}>
            <input placeholder="Search..." onChange={onChange} type="search" name="" id="test" />
        </Tilt>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SearchBar);