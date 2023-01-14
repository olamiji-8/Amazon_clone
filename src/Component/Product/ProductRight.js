import React,{useState,useEffect} from 'react';
 import axios from 'axios';
import "./ProductRight.css"

const ProductRight = () => {
  const [data,setData] = useState([]);
  
  // const effect =()=>{

  //   axios({
  //     method:"GET",
  //     url: "https://api.escuelajs.co/api/v1/products" ,
  //   })
  //   .then ((res)=>{
  //     console.log(res.data);
  //     setData(res.data);
  //   })
  //   .catch((e) => console.log(e))
  // }


  
  // useEffect(()=>{
  //   effect()
  // },[]);
  function getData(e){
    console.log(e);
    axios.get("https://api.escuelajs.co/api/v1/products"
  
    ) 
    .then((res)=>{ 
    console.log(res)
    setData(res.data)
   
    }) 
    .catch((error)=>{
    
   }); 
    }
    console.log(data); 
    useEffect(()=>{ 
    getData(); 
    },[]);

  

  return (
    <div className='ProductRight'>
        {data?.map((product) =>(
          <div key={product.id } className="product__div">
            { <div> <img src={product.images} alt="#" width="80%" height="40%" className='product__img'/> </div>}
            <div className='product__text'>
              <h6>{product.title}</h6>
              <h6> ${product.price}</h6>
              <h6 > {product.description}</h6>
            </div>
          </div>
        ))}
    </div>
  
  )
}

export default ProductRight