import React from 'react'
import banner from '../../assets/banner.png'
import banner2 from '../../assets/banner2.png'
import banner3 from '../../assets/banner3.png'
import banner4 from '../../assets/banner4.png'
import banner5 from '../../assets/banner5.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1500,
  };
  return (
    <section className='overflow-hidden h-[490px] w-full'>
      <Slider {...settings} className='m-[-10px]'>
        <div className="banner_main h-[490px] w-full">
          <img src={banner} className='w-full h-full' alt="img" />
        </div>
        <div className="banner_main h-[490px] w-full">
          <img src={banner2} className='w-full h-full' alt="img" />
        </div>
        <div className="banner_main h-[490px] w-full">
          <img src={banner3} className='w-full h-full' alt="img" />
        </div>
        <div className="banner_main h-[490px] w-full">
          <img src={banner4} className='w-full h-full' alt="img" />
        </div>
        <div className="banner_main h-[490px] w-full">
          <img src={banner5} className='w-full h-full' alt="img" />
        </div>
      </Slider>
    </section>
  )
}


export default Banner