import React from 'react'
import "./ProductLeft.css"

const ProductLeft = () => {
  return (
    <div className='ProductLeft'>
      <div className='ProductLeft__header'>Brands</div> 
      <div>
        <label className='ProductLeft__name'>
          <input type="checkbox"/>
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>
        </label>
      </div> 
    </div>
  )
}

export default ProductLeft