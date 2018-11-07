import React, { Component } from 'react'

import ProductList from './ProductList'

import { connect } from 'react-redux'
import { fetchProducts } from '../actions/productActions'

import HeroCard from './HeroCard';

import note from '../assets/images/note.png'
import xbox from '../assets/images/xboxx.png'

class Home extends Component {

    componentWillMount() {
        this.props.dispatch(fetchProducts())
    }

    render() {

        const { products, error, loading } = this.props;

        return (
            <section className="main">
                <section className="container">

                    <div className="space-40"></div>

                    <h2>Highlights</h2>

                    <div className="space-90"></div>

                    <div className="row">
                        <HeroCard image={xbox} />
                        <HeroCard image={note} />
                    </div>

                </section>
                <section className="container">

                    <div className="space-60"></div>

                    <h2 >Products</h2>

                    <div className="space-30"></div>

                    <ProductList products={products} loading={loading} error={error} />

                </section>
            </section>
        )
    }
}

const filterProducts = (products, filter) => {
    return products.filter(product => product.title.toLowerCase().indexOf(filter.toLowerCase()) > -1)
}

const mapStateToProps = state => {
    return {
        products: filterProducts(state.products.items, state.products.filter),
        hasFilter: state.products.filter != '',
        loading: state.products.loading,
        error: state.products.error
    }
}

export default connect(mapStateToProps)(Home);