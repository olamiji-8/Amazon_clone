import React from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <MenuIcon/>
        <p>All</p>
        </div>
        <p>Today's Deals</p>
        <p>Customer Service</p>
        <p>Gift Cards</p>
        <p>Registry</p>
        <span>Sell</span>
        {/* <div>
          <p>shop holiday fashion deals</p>
        </div> */}
      </div>
  )
}

export default Navbar