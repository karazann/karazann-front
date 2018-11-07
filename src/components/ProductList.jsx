import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, loading, error }) => {

    if (loading)
        return <div>Is loading...</div>

    if (error)
        return <div>Loading failed!</div>

    return (
        <Fragment>

            <h2 className='header'>Products</h2>

            <div className='row'>
                {products.map((product =>
                    <ProductCard key={product.title} title={product.title} image={product.image} progress={product.progress} />
                ))}
            </div>

        </Fragment>
    )
}

export default ProductList;

