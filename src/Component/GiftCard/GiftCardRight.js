import React from 'react';
import Data from "../../Data";

const GiftCardRight = () => {

  return (
    <div>
      <p>Shop the perfect gift card</p>
      <div>
        <p>Shop by occasion</p>
        <div>
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
          <div>
            <img src={Data.img} alt=""/>
            <h2>{Data.title}</h2>
            <h5>{Data.description}</h5>

          </div>
        )
      })}
      
    </div>
  )
}

export default GiftCardRight