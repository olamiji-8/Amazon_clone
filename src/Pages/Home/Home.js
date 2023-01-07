import React from 'react'
import AdvertisementOne from '../../Component/AdvertisementOne/AdvertisementOne'
import AdvertisementFour from '../../Component/AdvertisementFour/AdvertisementFour'
import "./Home.css"


const Home = () => {
  return (
    <div className='Homes'>
        <div style={{paddingTop:"260px", display:"flex",flexWrap:"wrap"}}>
          <AdvertisementOne/>
          <AdvertisementFour/>
          <AdvertisementOne/>
          <AdvertisementOne/>
          <AdvertisementFour/> 
          <AdvertisementOne/>
          {/* <AdvertisementFour/> */}
          <AdvertisementOne/>
          {/* <AdvertisementFour/> */}
        </div>
    </div>
  )
}

export default Home
