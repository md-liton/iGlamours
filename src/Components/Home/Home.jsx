import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Advertising from '../Advertising/Advertising'
import Allproducts from '../Allproducts/Allproducts'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/> 
     <Advertising/>
     <Allproducts/>
    </>
  )
}

export default Home