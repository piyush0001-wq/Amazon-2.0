import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React from 'react'

function Product({ product }) {
  const [rating] = React.useState(3)
  const [hasPrime] = React.useState(Math.random() < 0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic p-2 rounded-md bg-yellow-300">{product.category}</p>
      <Image src={product.image} height={200} width={200} objectFit="contain" />
      <h4>{product.title}</h4>

      <div className="flex">
        {
          Array(rating).fill().map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))
        }
      </div>
      <p className="text-xs my-2 line-clamp-2">{product.description}</p>
      <p>$ {product.price}</p>

      {
        hasPrime && (
          <div className="flex items-center space-x-2 ">
            <img className="w-12 " src="https://links.papareact.com/fdw" alt="prime" />
            <p className="text-xs text-gray-500">FREE next-day Delivery</p>
          </div>
        )
      }

      <button className="mt-auto bottom-0 p-2 text-xs bg-gradient-to-b from-yellow-300 to-yellow-400  rounded-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
    </div>
  )
}

export default Product
