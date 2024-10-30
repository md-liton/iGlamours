import React, { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';


const Menu = () => {
  const location =useLocation()

  const [active,setActive]=useState('')


  useEffect(()=>{
    let makeup = document.querySelector('.makeup')
    let makeupItem = document.querySelector('.makeup_item')
    let skincare = document.querySelector('.skincare')
    let skincareItem = document.querySelector('.skincare_item')
    let hair = document.querySelector('.hair')
    let hairItem = document.querySelector('.hair_item')
    let personalcare = document.querySelector('.personalcare')
    let personalcareItem = document.querySelector('.personalcare_item')
    let kbeauty = document.querySelector('.kbeauty')
    let kbeautyItem = document.querySelector('.kbeauty_item')
    let mom = document.querySelector('.mom')
    let momItem = document.querySelector('.mom_item')
    let undergarments = document.querySelector('.undergarments')
    let undergarmentsItem = document.querySelector('.undergarments_item')
    



    makeup.addEventListener("mouseenter", () => {
      makeupItem.classList.remove('hidden')
    });
    makeup.addEventListener("mouseleave", () => {
      makeupItem.classList.add('hidden')
    });
    skincare.addEventListener("mouseenter", () => {
      skincareItem.classList.remove('hidden')
    });
    skincare.addEventListener("mouseleave", () => {
      skincareItem.classList.add('hidden')
    });
    hair.addEventListener("mouseenter", () => {
      hairItem.classList.remove('hidden')
    });
    hair.addEventListener("mouseleave", () => {
      hairItem.classList.add('hidden')
    });
    personalcare.addEventListener("mouseenter", () => {
      personalcareItem.classList.remove('hidden')
    });
    personalcare.addEventListener("mouseleave", () => {
      personalcareItem.classList.add('hidden')
    });
    kbeauty.addEventListener("mouseenter", () => {
      kbeautyItem.classList.remove('hidden')
    });
    kbeauty.addEventListener("mouseleave", () => {
      kbeautyItem.classList.add('hidden')
    });
    mom.addEventListener("mouseenter", () => {
      momItem.classList.remove('hidden')
    });
    mom.addEventListener("mouseleave", () => {
      momItem.classList.add('hidden')
    });
    undergarments.addEventListener("mouseenter", () => {
      undergarmentsItem.classList.remove('hidden')
    });
    undergarments.addEventListener("mouseleave", () => {
      undergarmentsItem.classList.add('hidden')
    });
    
  },[])
  
  
  return (
    <header className='bg-secondry_color py-[5px] bg-secondry_color  border-t-[1px] border-primary_color  '>
        <div className="container">
            <div className="header_main nav_bottom text-paragraph font-semibold cursor-pointe text-white py-[10px]">
              <div className='flex justify-between items-center '>
                <Link to='/'  className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${ location.pathname == '/' && 'text-primary_color bg-[#FABFE2]' }`}  >All products</Link>

                
                <Link to='/makeup' className={`makeup cursor-pointer  rounded-full py-[5px] px-[10px] duration-300 relative   ${location.pathname == '/makeup'  && 'text-primary_color bg-[#FABFE2] '}`}>
                  <div className='flex items-center gap-[5px]'>MAKEUP <IoIosArrowDown /></div>
                  <div className='makeup_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[150px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                    <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>
                        <Link to='/makeup/face'>Face</Link>
                      </li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Lips</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Nails</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Foundation</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Concealer</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Mascara</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Eyeliner</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Blush</li>
                    </ul>
                  </div>
                  </Link>



                <Link to='skincare' className={`skincare cursor-pointer  rounded-full py-[5px] px-[10px] relative  ${location.pathname == '/skincare' && 'text-primary_color bg-[#FABFE2]'}`} >
                  <div className='flex items-center gap-[5px]'>SKIN CARE <IoIosArrowDown /></div>
                  <div  className='skincare_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[200px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Face</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hands & Feet</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Eye Care</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Shop By Concern</li>
                    </ul>
                  </div>
                  </Link>

                <Link to='/hair' className={`hair cursor-pointer  rounded-full py-[5px] px-[10px] relative ${location.pathname == '/hair' &&'text-primary_color bg-[#FABFE2]'}`} >
                  <div  className='flex items-center gap-[5px]'>HAIR <IoIosArrowDown /></div>
                  <div className='hair_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[200px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hair Care</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hair Styling</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hair accessories</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hair Treatment</li>
                    </ul>
                  </div>
                  </Link>

                  
                <Link to='/personalcare' className={`personalcare cursor-pointer  rounded-full py-[5px] px-[10px] relative  ${location.pathname == '/personalcare' && 'text-primary_color bg-[#FABFE2]'}`} >
                  <div  className='flex items-center gap-[5px]'>PERSONAL CARE <IoIosArrowDown /></div>
                  <div className='personalcare_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[250px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Bath & Shower</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Hands & Feet</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Sanitary Napkins</li>
                    </ul>
                  </div>
                  </Link>


                <Link to='/kbeauty' className={`kbeauty cursor-pointer  rounded-full py-[5px] px-[10px] relative  ${location.pathname == '/kbeauty' && 'text-primary_color bg-[#FABFE2]'}`}>
                  <div className='flex items-center gap-[5px]'>K-BEAUTY <IoIosArrowDown /></div> 
                  <div  className='kbeauty_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[200px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Moisturizer</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Sheet Mask</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Toners & Astringents</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Facewash</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Cleanser</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Serum/Oils</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Sleeping Mask</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Sunscreen</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Essence</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Facial Wipes</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Scrubs & Exfoliators</li>
                    </ul>
                  </div>
                </Link>


                <Link to='/mom&baby' className={`mom cursor-pointer  rounded-full py-[5px] px-[10px] relative  ${location.pathname == '/mom&baby' && 'text-primary_color bg-[#FABFE2]'}`} >
                  <div className='flex items-center gap-[5px]'>MOM & BABY <IoIosArrowDown /></div>
                  <div className='mom_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[200px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Baby Products</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Creams & Moisturizers</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Lotion</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Oil</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Powder</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Shampoo</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Soap & Bodywash</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Bath Time</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Sunscreen</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Baby Care</li>
                    </ul>
                  </div>
                </Link>

                <Link to='/undergarments' className={`undergarments cursor-pointer  rounded-full py-[5px] px-[10px] relative ${location.pathname == '/undergarments' && 'text-primary_color bg-[#FABFE2]'}`}>
                  <div className='flex items-center gap-[5px]'>UNDERGARMENTS <IoIosArrowDown /></div>
                  <div className='undergarments_item absolute text-white text-[14px] font-thin bg-secondry_color top-[30px] w-[200px] left-[-10px] flex justify-center items-center rounded-lg hidden duration-400 z-[99]'>
                  <ul className=' p-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Bra</li>
                      <li className='py-[5px] hover:text-primary_color duration-300'>Panty</li>
                    </ul>
                  </div>
                  </Link>


                <Link to='/essential' className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${location.pathname == '/essential' && 'text-primary_color bg-[#FABFE2]'}`} >ESSENTIAL</Link>

                <Link to='/blog' className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${location.pathname == '/blog' && 'text-primary_color bg-[#FABFE2]'}`} >BLOG</Link>


              </div>
            </div>
        </div>
    </header>
  )
}

export default Menu