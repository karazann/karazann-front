import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

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