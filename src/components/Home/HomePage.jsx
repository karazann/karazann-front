import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import ProductList from './ProductList'
import Hero from './Hero'

import './HomePage.scss'
import logo from '../../assets/images/logo-white.svg'

class HomePage extends Component {

    componentWillMount() {
        this.props.dispatch({ type: 'SET_SEARCH', payload: true })
    }

    componentWillUnmount() {
        this.props.dispatch({ type: 'SET_SEARCH', payload: false })
    }

    render() {
        if (this.props.loading)
            return (
                <div className='spinner' >
                    <img src={logo} alt="karazann-logo" />
                    <img src={logo} alt="karazann-logo" />
                </div>
            )

        return (
            <section className="page">
                {this.props.hasFilter ? null : <Hero />}
                <ProductList products={this.props.products} />
            </section>
        )
    }
}

const getSearchedProducts = createSelector(
    state => state.products.filter,
    state => state.products.items,
    (filter, products) => {
        if (products) {
            const searchText = filter.toLowerCase().replace(/ +(?= )/g, '')
            const product = products.filter(product => product.title.toLowerCase().indexOf(searchText) > -1)
            return product
        }
    }
)

const mapStateToProps = state => {
    return {
        loading: state.products.loading,
        products: state.products.loading ? null : getSearchedProducts(state),
        error: state.products.error,
        hasFilter: state.products.filter !== ''
    }
}

export default connect(mapStateToProps)(HomePage)