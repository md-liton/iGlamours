import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Advertising from '../Advertising/Advertising'
import Allproducts from '../Allproducts/Allproducts'
import Explore from '../Explore/Explore'
import Catagory from '../Catagory/Catagory'
import Service from '../Service/Service'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/> 
     <Advertising/>
     <Allproducts/>
     <Explore/>
     <Catagory/>
     <Service/>
     <Footer/>
    </>
  )
}

export default Home