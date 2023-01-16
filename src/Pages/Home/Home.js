import React from 'react'
import AdvertisementOne from '../../Component/AdvertisementOne/AdvertisementOne'
import AdvertisementFour from '../../Component/AdvertisementFour/AdvertisementFour'
import "./Home.css"
import Header from '../../Component/Header/Header'
import Footer from '../Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'


const Home = () => {
  return (
    <div className='Homes'>
      <Header/>
      <Navbar/>
        <div style={{paddingTop:"260px", display:"flex",flexWrap:"wrap",margin:"1px", marginLeft:"38px"}}>
          <AdvertisementOne/>
          <AdvertisementFour/>
          <AdvertisementOne/>
          <AdvertisementOne/>
          <AdvertisementFour/> 
          <AdvertisementOne/>
         <AdvertisementFour/> 
          <AdvertisementOne/>
          <AdvertisementFour/>
          <AdvertisementOne/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home
