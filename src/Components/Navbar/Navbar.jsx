import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo3.png'
import { HiSearch } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import Menu from '../Menu/Menu';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import SmallDeviceMenu from '../Menu/SmallDeviceMenu';





const Navbar = () => {

    const [menu,setMenu]=useState(false)


    useEffect(()=>{
        window.addEventListener("scroll",function(){
            var header = document.querySelector('.header')
            header.classList.toggle('sticky' , window.scrollY > 150)
        })

    },[])
  return (
    <>
    <nav className='bg-secondry_color header top-0 left-0 w-full z-[999]'>
        <div className="container">
            <div className="nav_main">
                <div className="nav_top flex justify-between items-center ">
                    <div className='md:w-1/3'>
                    <img src={logo} alt="logo" className=' h-[80px] cursor-pointer'/>
                    </div>
                    <div className={`md:w-1/3 relative text-white md:block duration-300 `}>
                    <input type="text" placeholder='Search Here' className={`focus:outline-none border-[2px] border-primary_color rounded-full w-full  md:py-[10px] pl-[20px] pr-[48px] h-[40px] md:h-[50px] bg-transparent `}/>
                    <div className=' border-l-[2px] border-primary_color absolute top-0 right-[10px] h-[40px] md:h-[50px] flex justify-center items-center p-[5px] text-[20px] cursor-pointer'>
                    <HiSearch />
                    </div>
                    </div>
                    <div className='md:w-1/3 '>
                    <div className='hidden md:block'>
                    <div className=' flex justify-end items-center gap-[15px]'>
                    <div className=' py-[5px] px-[10px] rounded-lg text-paragraph font-semibold cursor-pointer border-[2px] border-primary_color hover:bg-primary_color duration-300 text-white '>Login</div>
                    <div className=' py-[5px] px-[10px] rounded-lg text-paragraph font-semibold cursor-pointer border-[2px] border-primary_color hover:bg-transparent duration-300 text-white flex items-center gap-[10px] bg-primary_color'> <BsCart4 /> Cart</div>
                    </div>
                    </div>
                    <div className='md:hidden text-white text-[30px]'>
                    <FiMenu onClick={()=>setMenu(!menu)} className={` ${menu ? 'hidden' : 'block'}`}/>
                    <IoMdClose onClick={()=>setMenu(!menu)} className={` ${menu ? 'block' : 'hidden'}`}/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
              <div >
                  <Menu />
                  <div className={`${menu ? 'block' : 'hidden'}`}>
                    <SmallDeviceMenu/>
                  </div>
              </div>
    </nav>
    
    </>
  )
}

export default Navbar