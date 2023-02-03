import React from 'react';
import Data from "../../Data";
import  "./GiftCardRight.css";

const GiftCardRight = () => {

  return (
    <div className='GiftCardRight'>
      <p style={{fontWeight:"400",fontSize:"34px",textAlign:"center",marginTop:"2%"}}>Shop the perfect gift card</p>
      <div>
        <p style={{fontWeight:"668",fontSize:"28px", marginLeft:"6%",marginBottom:"2%",marginTop:"4%"}}>Shop by occasion</p>
        <div className='GiftCardRight_Button'>
          <button>New year's</button>
          <button>Valentine's day</button>
          <button>Birthday</button>
          <button>Thank you</button>
          <button>Work place</button>
          <button>New baby</button>
        </div>
      </div>
      <div>
        <p style={{fontWeight:"668",fontSize:"28px", marginLeft:"6%",marginBottom:"0%",marginTop:"4%"}}>Shop by card type</p>
        </div>
      {Data.map(Data =>{
        return(
          <div className='GiftCardRight_Item'>
            <div className='GiftCardRight_ItemFlex'>
            <div className='GiftCardRight_ItemBox'>
            <img src={Data.img} alt="" className='GiftCardRight_ItemImage'width="20%" height="60%"/>
            <h2>{Data.title}</h2>
            <h5>{Data.description}</h5>
            </div>
            </div>
            </div>
        )
      })}
      
    </div>
  )
}

export default GiftCardRight