import React from 'react'
import "./Header.css"
import Amazon from "../../Asset/amazon.png"
import Flag from "../../Asset/american-usa-flag.png"
import { Link } from 'react-router-dom'
 import SearchIcon from '@mui/icons-material/Search';
 import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
 import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
 import LocationOnIcon from '@mui/icons-material/LocationOn';

 

const Header = () => {
  return (
    <nav className='header'>
      <Link to= "/"> 
      <img src={Amazon} alt='logo' className='header__logo' width="142px" height="84px" style={{marginTop:"0px", cursor:"pointer"}}/>
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
          <img src={Flag}alt='flag' width="4px" height="84px"/>
          <span>EN</span>
          <span><ArrowDropDownIcon/></span>
        </div>
        <div className='header__sigin'>
          <p>Hello,sign in</p>
          <p>Account & Lists</p>
          <ArrowDropDownIcon className='header__dropdown__icon'/>
        </div>
        <div className='header__order'>
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className='header__cart'>
          <span className='header__counter'>0</span>
          <ShoppingCartOutlinedIcon style={{fontSize:"40px"}} className='header__cart__icon'/>
          <p>Cart</p>
        </div>
      </div>
    </nav>
  )
}

export default Header