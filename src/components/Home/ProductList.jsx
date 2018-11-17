import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products, loading, error }) => {

    if (loading)
        return <div>Is loading...</div>

    if (error)
        return <div>Loading failed!</div>


    if(products.length === 0) 
        return <div><h2 className='header'>Products</h2><p style={{textAlign: 'center'}}>nothing here</p></div>

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

