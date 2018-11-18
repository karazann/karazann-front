import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, loading, error }) => {

    if (loading)
        return <div>Is loading...</div>

    if (error)
        return <div>Loading failed!</div>

    if (products.length === 0)
        return <div style={{ textAlign: 'center' }}>nothing here</div>

    return (
        <div className='row'>
            {products.map((product =>
                <ProductCard key={product.title} title={product.title} image={product.imageUrl} progress={product.price} />
            ))}
        </div>
    )
}

export default ProductList

