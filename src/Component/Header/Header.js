import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"
import Flag from "../../Asset/american-usa-flag.png"
import { Link } from 'react-router-dom'
 import SearchIcon from '@mui/icons-material/Search';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import MenuIcon from '@mui/icons-material/Menu';
 

const Header = () => {
  return (
    <div>
    <nav className='header'>
      <Link to= "/"> 
      <img src={Amazon} alt='logo' className='header__logo' width="100%" height="84px" style={{marginTop:"0px", cursor:"pointer"}}/>
      </Link>
      <div className='header__location'>
        <span><LocationOnIcon className='header__location__icon'/></span>
        <span  className='header__location__text'>
          <p>Delivery to</p> 
          <p>Nigeria</p>
           </span>
      </div>
      <div >
        <select className='header__dropdown'>
          <option value="All">All</option>
          <option value="Alexa">Alexa</option>
          <option value="Books">Books</option>
          <option value="Baby">Baby</option>
          <option value="Beauty">Beauty</option>
          <option value="Cloth">Cloth</option>
        </select>
      </div>
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
        <div className='header__sigin'>
          <p>Hello,sign in</p>
          <p>Account & Lists</p>
          <span><ArrowDropDownIcon/></span>
        </div>
        <div className='header__order'>
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className='header__cart'>
          <AddShoppingCartIcon className='header__cart__icon'/>
        </div>
      </div>
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
    </nav>
    </div>
  )
}

export default Header