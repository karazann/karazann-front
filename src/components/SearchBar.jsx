import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'

const SearchBar = props => {

    const onInputChange = event => {
        console.log('dffasd')
        props.dispatch(setFilter(event.target.value));
    }

    return (
        <div className="float-right">
            <input onChange={onInputChange} type="text" name="" id="" />
            <a href="#">Search</a>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SearchBar);