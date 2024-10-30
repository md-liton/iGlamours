import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Advertising from '../Advertising/Advertising'
import Allproducts from '../Allproducts/Allproducts'
import Explore from '../Explore/Explore'
import Catagory from '../Catagory/Catagory'
import Service from '../Service/Service'
import Footer from '../Footer/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Whatsapp from '../Whatsapp/Whatsapp'
import Nails from '../SubCatagory/Nails'
import Blush from '../SubCatagory/Blush'
import Concealer from '../SubCatagory/Concealer'
import Eyeliner from '../SubCatagory/Eyeliner'
import Mascara from '../SubCatagory/Mascara'
import Foundation from '../SubCatagory/Foundation'

const Home = () => {
  const location =useLocation()
  return (
    <>
    <Navbar/>
    {
      location.pathname == '/' &&
        <div>
          <Banner/>
          <Advertising />
          <Allproducts />
          <Explore />
          <Catagory />
          <Service />
        </div>
    }
     <Outlet >
     </Outlet>
     <Whatsapp/>
     <Footer/>
    </>
  )
}

export default Home