import React, { Component } from 'react'
import '../scss/style.scss'

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

        const { items, error, loading } = this.props.products;

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

                    <ProductList products={items} loading={loading} error={error} />
                    
                </section>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);