import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {

    if (products.length === 0)
        return <div style={{ textAlign: 'center' }}>0 products found</div>

    return (
        <Fragment>
            <h2 className='header'>Products</h2>
            <div className='row'>
                {products.map((product =>
                    <ProductCard key={product.title} title={product.title} image={product.imageUrl} progress={product.price} />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList

