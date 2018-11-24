import React, { Component, Fragment } from 'react'

import ProductList from './ProductList'

import { connect } from 'react-redux'

import Hero from './Hero'

const HomePage = ({ products, loading, error, hasFilter }) => {

    if (loading)
        return (
            <div className='spinner' >
                <div></div>
                <div></div>
            </div>
        )

    return (
        <section className="page">
            <section className="container">

                {hasFilter ? null : <Hero />}

                
                <ProductList products={products} />
            </section>
        </section>
    )
}

const filterProducts = (products, filter) => {
    const searchText = filter.toLowerCase().replace(/ +(?= )/g, '');
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