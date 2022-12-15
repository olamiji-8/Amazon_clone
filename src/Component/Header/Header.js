import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"

const Header = () => {
  return (
    <nav className='header'>
      <img src={Amazon} alt='logo' className='header__logo' width="140px" height="70px" style={{marginTop:"0px"}}/>
      
    </nav>
  )
}

export default Header