import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className='navbar'>
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
  )
}

export default Navbar