import React from 'react'
import ProductLeft from '../../Component/Product/ProductLeft'
import ProductRight from '../../Component/Product/ProductRight'
import "./Product.css"

const Product = () => {
  return (
  <div style={{display:"flex"}}>
        <div>
            <ProductLeft/>
        </div>
        <div>
        <ProductRight/>
        </div>
    </div>
 )
}

export default Product