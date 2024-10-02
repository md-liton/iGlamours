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
     <Outlet>
     </Outlet>
     <Footer/>
    </>
  )
}

export default Home