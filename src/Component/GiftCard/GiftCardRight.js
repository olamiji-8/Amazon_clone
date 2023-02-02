import React from 'react';
import Data from "../../Data";
import  "./GiftCardRight.css";

const GiftCardRight = () => {

  return (
    <div>
      <p>Shop the perfect gift card</p>
      <div>
        <p>Shop by occasion</p>
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
        <p>Shop by card type</p>
        </div>
      {Data.map(Data =>{
        return(
          <div className='GiftCardRight_Item'>
            <div className='GiftCardRight_ItemFlex'>
            <img src={Data.img} alt="" className='GiftCardRight_ItemImage'width="30%" height="80%"/>
            <h2>{Data.title}</h2>
            <h5>{Data.description}</h5>
            </div>
            </div>
        )
      })}
      
    </div>
  )
}

export default GiftCardRight