import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-100  shadow-2xl">
      {
        products.slice(0, 4).map((product) => (
          <Product key={product.id} product={product} />
        ))
      }

      <img className="md:col-span-full" src="https://links.papareact.com/dyz" alt="" />


      {
        products.slice(4, products.length).map((product) => (
          <Product key={product.id} product={product} />
        ))
      }

    </div>
  )
}

export default ProductFeed
