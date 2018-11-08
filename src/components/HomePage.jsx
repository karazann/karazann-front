import React, { Component, Fragment } from 'react'

import ProductList from './ProductList'

import { connect } from 'react-redux'

import HeroCard from './HeroCard';
import SearchBar from './SearchBar'

import note from '../assets/images/note.png'
import xbox from '../assets/images/xboxx.png'

class HomePage extends Component {

    render() {
        const el = <Fragment><h2 className='header'>Featured</h2><div className="row"><HeroCard image={xbox} /><HeroCard image={note} /></div></Fragment>


        const { products, error, loading } = this.props;

        return (
            <section className="main">
                <section className="container">
                    
                    <SearchBar />

                    {this.props.hasFilter ? null : el}

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

export default connect(mapStateToProps)(HomePage);