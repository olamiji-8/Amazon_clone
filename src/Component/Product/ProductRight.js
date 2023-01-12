import React,{useState,useEffect}from 'react';
import axios from 'axios';
import "./ProductRight.css"

const ProductRight = () => {
  const {data,setData} =useState({});
  
  useEffect(()=>{
    axios({
      method:"GET",
      url: "https://api.escuelajs.co/api/v1/products" ,
    })
    .then ((res)=>{
      console.log(res.data);
      setData(res.data);
    })
    .catch((e) => console.log(e));
  })
  return (
    <div className='ProductRight'>
        {data.map((product) =>(
          <div key={product.id}>
            <div> <img src={product.images} alt="#"/> </div>
            <div>
              <h6>{product.title}</h6>
            </div>
          </div>
        ))}
    </div>
  )
}

export default ProductRight