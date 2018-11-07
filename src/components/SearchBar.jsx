import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'

const SearchBar = props => {


    const onChange = event => {
        props.dispatch(setFilter(event.target.value));
    }

    return (
        <div className="search">
            <input placeholder="Search..." onChange={onChange} type="search" name="" id="test" />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SearchBar);