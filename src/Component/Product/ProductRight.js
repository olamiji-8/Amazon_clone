import React,{useState,useEffect}from 'react';
import axios from 'axios';
import "./ProductRight.css"

const ProductRight = () => {
  const {loading,setLoading} =useState(false);
  const {data,setData} =useState({});
  
  useEffect(()=>{
    axios({
      method:"GET",
      url: "" ,
    })
    .then ((res)=>{
      console.log(res.data);
      setData(res.data);
    })
    .catch((e) => console.log(e));
  })
  return (
    <div className='ProductRight'>
        
    </div>
  )
}

export default ProductRight