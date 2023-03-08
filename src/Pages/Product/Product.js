import React from 'react'
import Header from '../../Component/Header/Header'
import Navbar from '../../Component/Navbar/Navbar'
import ProductLeft from '../../Component/Product/ProductLeft'
import ProductRight from '../../Component/Product/ProductRight'
import Footer from '../Footer/Footer'
import "./Product.css"

const Product = () => {
  return (
  <div style={{display:"flex"}}>
        <div>
            {/* <div>
                <Header/>
                <Navbar/>
            </div> */}
            <ProductLeft/>
        </div>
        <div>
        <ProductRight/>
        </div>
        {/* <div>
        <Footer/>
        </div> */}
    </div>
 )
}

export default Product