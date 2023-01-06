import React from 'react'
import AdvertisementOne from '../../Component/AdvertisementOne/AdvertisementOne'
import "./Home.css"


const Home = () => {
  return (
    <div className='Home'>
        <div style={{paddingTop:"260px", display:"flex",flexWrap:"wrap"}}>
          <AdvertisementOne/>
          <AdvertisementOne/>
          <AdvertisementOne/>
          <AdvertisementOne/>
          <AdvertisementOne/>
        </div>
    </div>
  )
}

export default Home
