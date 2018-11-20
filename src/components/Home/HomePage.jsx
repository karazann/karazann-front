import React, { Component, Fragment } from 'react'

import ProductList from './ProductList'

import { connect } from 'react-redux'

import Hero from './Hero';



const HomePage = ({ products, loading, error, hasFilter }) => {
    console.log(hasFilter)
    return (
        <section className="page">
            <section className="container">

                {hasFilter ? null : <Hero/>}

                <h2 className='header'>Products</h2>
                <ProductList products={products} loading={loading} error={error} />
            </section>
        </section>
    )
}

const filterProducts = (products, filter) => {
    const searchText = filter.toLowerCase().replace(/ +(?= )/g,'');
    return products.filter(product => product.title.toLowerCase().indexOf(searchText) > -1)
}

const mapStateToProps = state => {
    return {
        products: filterProducts(state.products.items, state.products.filter),
        loading: state.products.loading,
        error: state.products.error,
        hasFilter: state.products.filter != ''
    }
}

export default connect(mapStateToProps)(HomePage)