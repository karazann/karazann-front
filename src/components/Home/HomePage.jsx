import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import ProductList from './ProductList'
import Hero from './Hero'

import './HomePage.scss'

const HomePage = ({ products, loading, error, hasFilter }) => {

    if (loading)
        return (
            <div className='spinner' >
                <img src="/logo-white.svg" alt="karazann-logo" />
                <img src="/logo-white.svg" alt="karazann-logo" />
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