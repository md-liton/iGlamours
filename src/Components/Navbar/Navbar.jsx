import React, { useEffect } from 'react'
import logo from '../../assets/Logo3.png'
import { HiSearch } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import Menu from '../Menu/Menu';



const Navbar = () => {


    useEffect(()=>{
        window.addEventListener("scroll",function(){
            var header = document.querySelector('.header')
            header.classList.toggle('fixed' , window.scrollY > 0)
        })
    },[])
  return (
    <>
    <nav className='bg-secondry_color header top-0 left-0 w-full z-[999] ease-in duration-300 delay-300'>
        <div className="container">
            <div className="nav_main">
                <div className="nav_top flex justify-between items-center ">
                    <div className='w-1/3'>
                    <img src={logo} alt="logo" className=' h-[80px] cursor-pointer'/>
                    </div>
                    <div className='w-1/3 relative text-white'>
                    <input type="text" placeholder='Search Here' className='focus:outline-none border-[2px] border-primary_color rounded-full w-full py-[10px] pl-[20px] pr-[48px] h-[50px] bg-transparent'  />
                    <div className=' border-l-[2px] border-primary_color absolute top-0 right-[10px]  h-[50px] flex justify-center items-center p-[5px] text-[20px] cursor-pointer'>
                    <HiSearch />
                    </div>
                    </div>
                    <div className='w-1/3 flex justify-end items-center gap-[15px]'>
                    <div className=' py-[5px] px-[10px] rounded-lg text-paragraph font-semibold cursor-pointer border-[2px] border-primary_color hover:bg-primary_color duration-300 text-white '>Login</div>
                    <div className=' py-[5px] px-[10px] rounded-lg text-paragraph font-semibold cursor-pointer border-[2px] border-primary_color hover:bg-transparent duration-300 text-white flex items-center gap-[10px] bg-primary_color'> <BsCart4 /> Cart</div>
                    </div>
                </div>
            </div>
        </div>
        <Menu/>
    </nav>
    
    </>
  )
}

export default Navbar