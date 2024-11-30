import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo3.png'
import { HiSearch } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import Menu from '../Menu/Menu';
import { IoIosArrowDown } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';





const Navbar = () => {

    const navigate = useNavigate()

    const [menu,setMenu]=useState(false)
    const [makeup,setMakeup]=useState(false)
    const [skin,setSkin]=useState(false)
    const [hair,setHair]=useState(false)
    const [personalcare,setPersonalCare]=useState(false)
    const [kbeauty,setKbeauty]=useState(false)
    const [mom,setMom]=useState(false)
    const [undergarments,setUndergarments]=useState(false)

    useEffect(()=>{
        window.addEventListener("scroll",function(){
            var header = document.querySelector('.header')
            header.classList.toggle('sticky' , window.scrollY > 150)
        })

    },[])

    useEffect(()=>{
        if(!menu){
            setMakeup(false)
            setSkin(false)
            setHair(false)
            setPersonalCare(false)
            setKbeauty(false)
            setMom(false)
            setUndergarments(false)
        }
    },[menu])

   


  return (
    <>
    <nav className={`bg-secondry_color header top-0 left-0 w-full z-[999] `}>
        <div className="container">
            <div className="nav_main ">
                <div className="nav_top flex justify-between items-center ">
                    <div className='md:w-1/3'>
                    <div onClick={()=>navigate('/')}>
                    <img src={logo} alt="logo" className=' h-[80px] cursor-pointer'/>
                    </div>
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
                      <div className='md:hidden' >
                          <div className="px-[20px]">
                              <div className="small_dev_menu_main">
                                  <div className=" text-paragraph font-semibold cursor-pointe text-white py-[10px]">

                                      <div className='flex items-center gap-[5px] py-[6px]' onClick={()=>setMenu(!menu)}><Link to='/'>All products </Link></div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setMakeup(!makeup)}>MAKEUP <IoIosArrowDown /></div>
                                          <div className={`${makeup ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/makeup' >Makeup</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/face'>Face</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/lips'>Lips</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/nails'>Nails</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/foundation'>Foundation</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/concealer'>Concealer</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/mascara'>Mascara</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/eyeliner'>Eyeliner</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300'onClick={()=>setMenu(!menu)}><Link to='/makeup/blush'>Blush</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setSkin(!skin)}>SKIN CARE <IoIosArrowDown /></div>
                                          <div className={`${skin ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[3px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/skincare'>Skin Care</Link></li>
                                                  <li className='py-[3px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/skincare/face'>Face</Link></li>
                                                  <li className='py-[3px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/skincare/hands&feet'>Hands & Feet</Link></li>
                                                  <li className='py-[3px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/skincare/eyecare'>Eye Care</Link></li>
                                                  <li className='py-[3px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/skincare/shopbyconcern'>Shop By Concern</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setHair(!hair)}>HAIR <IoIosArrowDown /></div>
                                          <div className={`${hair ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/hair'>Hair </Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/hair/haircare'>Hair Care</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/hair/hairstyling'>Hair Styling</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/hair/hairaccessories'>Hair Accessories</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/hair/hairtreatment'>Hair Treatment</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setPersonalCare(!personalcare)}>PERSONAL CARE <IoIosArrowDown /></div>
                                          <div className={`${personalcare ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/personalcare'>Personal Care</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/personalcare/Bath&Shower'>Bath & Shower</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/personalcare/SanitaryNapkins'>Sanitary Napkins</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setKbeauty(!kbeauty)}>K-BEAUTY<IoIosArrowDown /></div>
                                          <div className={`${kbeauty ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty'>k-Beauty</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/moisturizer'>Moisturizer</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/sheetmask'>Sheet Mask</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/toners&astringents'>Toners & Astringents</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/facewash'>Facewash</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/cleanser'>Cleanser</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/serumoils'>Serum/Oils</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/sleepingmask'>Sleeping Mask</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/sunscreen'>Sunscreen</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/essence'>Essence</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/facialwipes'>Facial Wipes</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/kbeauty/scrubs&exfoliators'>Scrubs & Exfoliators</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='py-[6px]'>
                                          <div className='flex items-center gap-[5px]' onClick={() => setMom(!mom)}>MOM & BABY<IoIosArrowDown /></div>
                                          <div className={`${mom ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby'>Mon & Baby</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/babyproducts'>Baby Products</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/creams&moisturizers'>Creams & Moisturizers</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/lotion'>Lotion</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/oil'>Oil</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/powder'>Powder</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/shampoo'>Shampoo</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/soap&bodywash'>Soap & Bodywash</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/bathtime'>Bath Time</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/mom&baby/babycare'>Baby Care</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div>
                                          <div className='flex items-center gap-[5px]' onClick={() => setUndergarments(!undergarments)}>UNDERGARMENTS <IoIosArrowDown /></div>
                                          <div className={`${undergarments ? "block" : "hidden"}`}>
                                              <ul className=' px-[20px] '>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/undergarments'>Undergarments</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/undergarments/bra'>Bra</Link></li>
                                                  <li className='py-[5px] hover:text-primary_color duration-300' onClick={()=>setMenu(!menu)}><Link to='/undergarments/panty'>Panty</Link></li>
                                              </ul>
                                          </div>
                                      </div>
                                      <div className='flex items-center gap-[5px] py-[6px]' onClick={()=>setMenu(!menu)}><Link to='/essential'>ESSENTIAL</Link></div>
                                      <div className='flex items-center gap-[5px] py-[6px]' onClick={()=>setMenu(!menu)}><Link to='/blog'>BLOG</Link></div>
                                  </div>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
    </nav>
    
    </>
  )
}

export default Navbar