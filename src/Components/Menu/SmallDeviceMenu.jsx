import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

const SmallDeviceMenu = () => {


    const [makeup,setMakeup]=useState(false)
    const [skin,setSkin]=useState(false)
    const [hair,setHair]=useState(false)
    const [personalcare,setPersonalCare]=useState(false)
    const [kbeauty,setKbeauty]=useState(false)
    const [mom,setMom]=useState(false)
    const [undergarments,setUndergarments]=useState(false)




  return (
    <section className='md:hidden'>
        <div className="container">
            <div className="small_dev_menu_main">
            <div className=" text-paragraph font-semibold cursor-pointe text-white py-[10px]">

            <div className='flex items-center gap-[5px] py-[6px]'>All products </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setMakeup(!makeup)}>MAKEUP <IoIosArrowDown /></div>
                  <div className={`${makeup? "block":"hidden"}`}>
                    <ul className=' px-[20px] '>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup'>Makeup</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/face'>Face</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/lips'>Lips</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/nails'>Nails</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/foundation'>Foundation</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/concealer'>Concealer</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/mascara'>Mascara</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/eyeliner'>Eyeliner</Link></li>
                      <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/makeup/blush'>Blush</Link></li>
                    </ul>
                  </div>
              </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setSkin(!skin)}>SKIN CARE <IoIosArrowDown /></div>
                  <div className={`${skin? "block":"hidden"}`}>
                  <ul className=' px-[20px] '>
                      <li className='py-[3px] hover:text-primary_color duration-300'><Link to='/skincare'>Skin Care</Link></li>
                      <li className='py-[3px] hover:text-primary_color duration-300'><Link to='/skincare/face'>Face</Link></li>
                      <li className='py-[3px] hover:text-primary_color duration-300'><Link to='/skincare/hands&feet'>Hands & Feet</Link></li>
                      <li className='py-[3px] hover:text-primary_color duration-300'><Link to='/skincare/eyecare'>Eye Care</Link></li>
                      <li className='py-[3px] hover:text-primary_color duration-300'><Link to='/skincare/shopbyconcern'>Shop By Concern</Link></li>
                    </ul>
                  </div>
              </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setHair(!hair)}>HAIR <IoIosArrowDown /></div>
                  <div className={`${hair? "block":"hidden"}`}>
                              <ul className=' px-[20px] '>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/hair'>Hair </Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/hair/haircare'>Hair Care</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/hair/hairstyling'>Hair Styling</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/hair/hairaccessories'>Hair Accessories</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/hair/hairtreatment'>Hair Treatment</Link></li>
                              </ul>
                  </div>
              </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setPersonalCare(!personalcare)}>PERSONAL CARE <IoIosArrowDown /></div>
                  <div className={`${personalcare? "block":"hidden"}`}>
                              <ul className=' px-[20px] '>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/personalcare'>Personal Care</Link></li>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/personalcare/Bath&Shower'>Bath & Shower</Link></li>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/personalcare/SanitaryNapkins'>Sanitary Napkins</Link></li>
                              </ul>
                  </div>
              </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setKbeauty(!kbeauty)}>K-BEAUTY<IoIosArrowDown /></div>
                  <div className={`${kbeauty? "block":"hidden"}`}>
                              <ul className=' px-[20px] '>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty'>k-Beauty</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/moisturizer'>Moisturizer</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/sheetmask'>Sheet Mask</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/toners&astringents'>Toners & Astringents</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/facewash'>Facewash</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/cleanser'>Cleanser</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/serumoils'>Serum/Oils</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/sleepingmask'>Sleeping Mask</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/sunscreen'>Sunscreen</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/essence'>Essence</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/facialwipes'>Facial Wipes</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/kbeauty/scrubs&exfoliators'>Scrubs & Exfoliators</Link></li>
                              </ul>
                  </div>
              </div>
              <div className='py-[6px]'>
                  <div className='flex items-center gap-[5px]' onClick={()=>setMom(!mom)}>MOM & BABY<IoIosArrowDown /></div>
                  <div className={`${mom? "block":"hidden"}`}>
                              <ul className=' px-[20px] '>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby'>Mon & Baby</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/babyproducts'>Baby Products</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/creams&moisturizers'>Creams & Moisturizers</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/lotion'>Lotion</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/oil'>Oil</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/powder'>Powder</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/shampoo'>Shampoo</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/soap&bodywash'>Soap & Bodywash</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/bathtime'>Bath Time</Link></li>
                                  <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/mom&baby/babycare'>Baby Care</Link></li>
                              </ul>
                  </div>
              </div>
              <div>
                  <div className='flex items-center gap-[5px]' onClick={()=>setUndergarments(!undergarments)}>UNDERGARMENTS <IoIosArrowDown /></div>
                  <div className={`${undergarments? "block":"hidden"}`}>
                              <ul className=' px-[20px] '>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/undergarments'>Undergarments</Link></li>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/undergarments/bra'>Bra</Link></li>
                              <li className='py-[5px] hover:text-primary_color duration-300'><Link to='/undergarments/panty'>Panty</Link></li>
                              </ul>
                  </div>
              </div>
              <div className='flex items-center gap-[5px] py-[6px]'>ESSENTIAL</div>
              <div className='flex items-center gap-[5px] py-[6px]'>BLOG</div>
            </div>
    
            </div>
        </div>
    </section>
  )
}

export default SmallDeviceMenu