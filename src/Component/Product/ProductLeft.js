import React from 'react'
import "./ProductLeft.css"

const ProductLeft = () => {
  return (
    <div className='ProductLeft'>
      <div className='ProductLeft__header'>Brands</div> 
      <div>
        <label className='ProductLeft__name'>
          <input type="checkbox"/>Shoes
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Wristwatch
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Bags
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Women's Shoes
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Software
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Furniture
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Music
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Men’s Fashion
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Movies & TV
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Electronics
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Beauty
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Baby Clothing & Accessories
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Amazon Devices
        </label>
        <label className='ProductLeft__name'>
        <input type="checkbox"/>Computers & Accessories
        </label>
      </div> 
      <div className='ProductLeft__middle'>Price</div>
      <p>All</p>
      <p>Under $25</p>
      <p>$25 to $50</p>
      <p>$50 to $100</p>
      <p>$100 to $200</p>
      <p>$200 & Above</p>
      <div className='ProductLeft__bottom'>Average Customer Review</div>
      
    </div>
  )
}

export default ProductLeft








