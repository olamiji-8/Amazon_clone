import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"
import Flag from "../../Asset/american-usa-flag.png"
import { Link } from 'react-router-dom'
 import SearchIcon from '@mui/icons-material/Search';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 import MenuIcon from '@mui/icons-material/Menu';
 

const Header = () => {
  return (
    <div>
    <nav className='header'>
      <Link to= "/"> 
      <img src={Amazon} alt='logo' className='header__logo' width="140px" height="84px" style={{marginTop:"0px", cursor:"pointer"}}/>
      </Link>
      
      <input type="text" className='header__searchInput'/>
      <div className='header__search'>
       <SearchIcon className='header__searchIcon'/> 
       </div>
      <div className='header__nav'>
        <div>
          <img src={Flag}alt='flag' width="40px" height="84px"/>
          <span>EN</span>
          <span><ArrowDropDownIcon/></span>
        </div>
        <div>
          <span>Hello,sign in</span>
          <span>Account & Lists</span>
          <span><ArrowDropDownIcon/></span>
        </div>
        <div>
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <div>
          <span><AddShoppingCartIcon/></span>
        </div>
      </div>
      </nav>
      <div>
        <span><MenuIcon/></span>
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
    </div>
  )
}

export default Header