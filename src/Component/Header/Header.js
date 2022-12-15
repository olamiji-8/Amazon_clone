import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='header'>
      <Link to= "/"> 
      <img src={Amazon} alt='logo' className='header__logo' width="140px" height="70px" style={{marginTop:"0px", cursor:"pointer"}}/>
      </Link>

      <input type="text" className='header__searchInput'/>
    </nav>
  )
}

export default Header