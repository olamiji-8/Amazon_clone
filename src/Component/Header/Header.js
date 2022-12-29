import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"
import { Link } from 'react-router-dom'
 import SearchIcon from '@mui/icons-material/Search';
 

const Header = () => {
  return (
    <nav className='header'>
      <Link to= "/"> 
      <img src={Amazon} alt='logo' className='header__logo' width="140px" height="70px" style={{marginTop:"0px", cursor:"pointer"}}/>
      </Link>

      <input type="text" className='header__searchInput'/>
       <SearchIcon className='header__searchIcon'/> 

      <div className='header__nav'>
        <div>
          <img src=''alt=''/>
          <span>EN</span>
          <span>icon</span>
        </div>
        <div>
          <span>Hello,sign in</span>
          <span>Account & Lists</span>
          <span>icon</span>
        </div>
        <div>
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div>
          <span>icon</span>
        </div>
      </div>
      <div>
        <span>icon</span>
        <span>All</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
        <span>Gift Cards</span>
        <span>Registry</span>
        <span>Sell</span>
        <div>
          <span>shop holiday fashion deals</span>
        </div>
      </div>
    </nav>
  )
}

export default Header