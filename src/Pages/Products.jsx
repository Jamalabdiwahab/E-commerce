import React, { useState } from 'react'
import Data from '../../Data.json'
import Product from '../Components/Product'

const Products = () => {
    const [products, setProducts] = useState(Data.products)
  return (
    <div  className="container mt-5">
      <h1>Our <span>Products</span></h1>
    <div id='products' >
        {
            products.map(p => (
                <Product product = {p}/>
            ))
        }
    </div>
    </div>
   
  )
}

export default Products