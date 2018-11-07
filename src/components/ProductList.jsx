import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, loading, error }) => {

    if (loading)
        return <div>Is loading...</div>

    if (error)
        return <div>Loading failed!</div>

    return (
        <div className='row'>
            {products.map((product =>
                <ProductCard key={product.title} title={product.title} image={product.image} progress={product.progress} />
            ))}
        </div>
    )
}

export default ProductList;

