import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'

const SearchBar = ({dispatch, active, filter}) => {

    const onChange = event => {
        dispatch(setFilter(event.target.value));
    }

    if(!active)
        return null

    return (
        <div className="search"  options={{ speed: 1500, scale: 1.04, max: 0,reverse: true, axis: 'y' }}>
            <input placeholder="Search..." onChange={onChange} type="search" name="" id="test" value={filter}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.products.filter
    }
}

export default connect(mapStateToProps)(SearchBar);