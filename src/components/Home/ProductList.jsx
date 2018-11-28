import React, { Fragment } from 'react'
import ProductCard from './ProductCard'

const ProductList = ({ products }) => {

    if (products.length === 0)
        return <div style={{ textAlign: 'center' }}>0 products found</div>

    return (
        <Fragment>
            <div className='header-2'>
                <div><svg xmlns="http://www.w3.org/2000/svg" overflow='visible' stroke-width="2" width="20" height="20" viewBox="0 0 24 24"><path stroke-linejoin="round" fill="white"  stroke="white"  d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm7.91 6.646l-7.905 4.218-7.872-4.294 7.862-4.289 7.915 4.365zm-16.91 1.584l8 4.363v8.607l-8-4.268v-8.702zm10 12.97v-8.6l8-4.269v8.6l-8 4.269z"/></svg></div>
                <h2>Products</h2>
            </div>
            <div className='row'>
                {products.map((product =>
                    <ProductCard key={product.title} title={product.title} image={product.imageUrl} progress={product.price} />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList

