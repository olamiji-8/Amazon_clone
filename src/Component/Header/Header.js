import React from 'react'
import Amazon from "../../Asset/amazon.png"

const Header = () => {
  return (
    <nav className='header'>
      <img src={Amazon} alt='logo' className='header__logo'/>
      
    </nav>
  )
}

export default Header