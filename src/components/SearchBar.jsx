import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions/productActions'

const SearchBar = props => {

    let inputRef;

    const onClick = event => {
        console.log('dffasd')
        props.dispatch(setFilter(inputRef.value));
    }

    return (
        <div className="search">
            <input placeholder="Type something..." onChange={onClick} ref={input => inputRef = input} type="search" name="" id="test" />
            <button type="submit" onClick={onClick} >Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(SearchBar);