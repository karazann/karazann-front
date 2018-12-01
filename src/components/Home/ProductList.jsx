import React, { Fragment } from 'react'
import ProductCard from './ProductCard'
import ContentHeader from '../ContentHeader'

import productimg from '../../assets/images/box.svg'

const ProductList = ({ products }) => {

    if (products.length === 0)
        return <div style={{ textAlign: 'center' }}>0 products found</div>

    return (
        <Fragment>
            <ContentHeader title='Product' img={productimg} />
            <div className='row'>
                {products.map((product =>
                    <ProductCard
                        key={product._id}
                        title={product.title}
                        slug={product.slug}
                        image={product.imageUrl}
                        progress={Math.floor(Math.random() * (100 - 0 + 1) + 0)}
                        price={Math.round(Math.random() * 1000)}
                    />
                ))}
            </div>
        </Fragment>
    )
}

export default ProductList

