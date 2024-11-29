import React, { useEffect, useState } from 'react'
import { SlEnergy } from "react-icons/sl";
import img from '../../assets/top.png'
import { FaStar } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";





const Sidebar = () => {
  const location =useLocation()

    const [makeup,setMakeup]=useState(true)
    const [skin , setSkin]=useState(true)
    const [hair,setHair]=useState(true)
    const [personal,setPersonal]=useState(true)
    const [beauty ,setBeauty]=useState(true)
    const [mom , setMom]=useState(true)
    const [under,setUnder]=useState(true)
    const [essential,setEssential]=useState(true)

    useEffect(()=>{
      location.pathname == '/makeup' && setMakeup(false);
      location.pathname == '/skincare' && setSkin(false);
      location.pathname == '/hair' && setHair(false);
      location.pathname == '/personalcare' && setPersonal(false);
      location.pathname == '/kbeauty' && setBeauty(false);
      location.pathname == '/mom&baby' && setMom(false);
      location.pathname == '/undergarments' && setUnder(false);
      location.pathname == '/essential' && setEssential(false);
    },[])
    


  return (
      <div className='mr-[20px]'>
      <div className='hidden md:block'>
        <p className='font-semibold md:text-[18px] font-heading text-secondry_color py-[10px] border-b-[1px] mb-[10px]'>Filter by Catagory</p>
        <select className='mt-[10px] md:w-full focus:outline-none border-[1px] border-primary_color px-[10px] rounded-[5px] py-[7px] '>
          <option >Default sorting</option>
          <option >Price: Low to High</option>
          <option >Price: High to Low</option>
          <option >Product: Old First</option>
          <option >Product: New First</option>
          <option >Popularity: Most Popular First</option>
          <option >Popularity: Less Popular first</option>
        </select>
      </div>
          <div className="catagory_subcatagory ">

            <div className='py-[10px]'>
              <div className='border-b-[1px]'>
                  <p className='font-semibold md:text-[18px] text-[13px] font-heading text-secondry_color py-[10px] '>Top rated products</p>
              </div>

              <div className='flex justify-center gap-[10px] md:block'>

              <div className='md:flex items-center gap-[15px] py-[20px] border-b-[1px]'>
                <div>
                <img src={img} alt="img" className='w-[65px] h-[65px] rounded-lg '/>
                </div>
                <div >
                <p className='md:font-bold font-heading text-[14px]'>CPS Keratin Doctor Hair Treatment</p>
                <div className='flex items-center gap-[1px] text-[#EABE12]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className='flex md:gap-[15px] md:flex-row flex-col'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                </div>
              </div>
              <div className='md:flex items-center gap-[15px] py-[20px] border-b-[1px]'>
                <div>
                <img src={img} alt="img" className='w-[65px] h-[65px] rounded-lg '/>
                </div>
                <div >
                <p className='md:font-bold font-heading text-[14px]'>CPS Keratin Doctor Hair Treatment</p>
                <div className='flex items-center gap-[1px] text-[#EABE12]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className='flex md:gap-[15px] md:flex-row flex-col'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                </div>
              </div>
              <div className='md:flex items-center gap-[15px] py-[20px] border-b-[1px]'>
                <div>
                <img src={img} alt="img" className='w-[65px] h-[65px] rounded-lg '/>
                </div>
                <div >
                <p className='md:font-bold font-heading text-[14px]'>CPS Keratin Doctor Hair Treatment</p>
                <div className='flex items-center gap-[1px] text-[#EABE12]'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                </div>
                <div className='flex md:gap-[15px] md:flex-row flex-col'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                </div>
              </div>

              </div>



            </div>
              <div className='border-b-[1px]'>
                  <p className='font-semibold text-[18px] font-heading text-secondry_color py-[10px] '>Product Categories</p>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Free Delivery</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Offers</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Buy 1 Get 1</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Combo</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Top Selling</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300  ${location.pathname == '/makeup' ? 'text-primary_color font-bold' : 'text-secondry_color'} ` }
                 onClick={()=>setMakeup(!makeup)}>
                  <Link to='/makeup'>MakeUp</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${makeup && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Face</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Lips</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Nails</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Foundation</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1100</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Concealer</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>510</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Mascara</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>80</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Eyeliner</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>20</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Blush</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>500</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300  ${location.pathname == '/skincare'? 'text-primary_color font-bold ':"text-secondry_color"}` }
                 onClick={()=>setSkin(!skin)}>
                  <Link to='/skincare'>Skin Care</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${skin && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Face</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hands & Feet</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Eye Care</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/hair' && 'text-primary_color font-bold'} ` }
                 onClick={()=>setHair(!hair)}>
                  <Link to='/hair'>Hair</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${hair && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hair Care</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hair Styling</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hair accessories</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hair Treatment</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/personalcare' && 'text-primary_color font-bold'}` }
                 onClick={()=>setPersonal(!personal)}>
                  <Link to='/personalcare'>Personal Care</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${personal && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Bath & Shower</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hands & Feet</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Sanitary Napkins</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/kbeauty' && 'text-primary_color font-bold'}` }
                 onClick={()=>setBeauty(!beauty)}>
                  <Link to='/kbeauty'>K-Beauty</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${beauty && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Moisturizer</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Sheet Mask</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Toners & Astringents</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Facewash</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Cleanser</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Serum/Oils</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Sleeping Mask</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Sunscreen</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Essence</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Facial Wipes</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Scrubs & Exfoliators</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/mom&baby' && 'text-primary_color font-bold'}` }
                 onClick={()=>setMom(!mom)}>
                  <Link to='/mom&baby'>Mom & Baby</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${mom && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Baby Products</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Creams & Moisturizers</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Lotion</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Oil</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Powder</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Shampoo</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Soap & Bodywash</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Bath Time</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Sunscreen</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Baby Care</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>250</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/undergarments' && 'text-primary_color font-bold'}` }
                 onClick={()=>setUnder(!under)}>
                  <Link to='/undergarments'>Undergarments</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${under && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Bra</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Panty</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                </div>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph  cursor-pointer hover:text-primary_color duration-300 ${location.pathname == '/essential' && 'text-primary_color font-bold'}` }
                 onClick={()=>setEssential(!essential)}>
                  <Link to='/essential'>Essential</Link>
                 </p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
                </div>
                <div className={`makeup_items pl-[20px] duration-300 ease-in-out ${essential && 'hidden'}`}>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Eyeliner</p>
                <span className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>99</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Eye Care</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hair Styling</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                <div className='flex justify-between items-center py-[3px]'>
                <p className='text-[12px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 py-[5px]'>Hands & Feet</p>
                <span  className='px-[5px] border-[1px]  border-primary_color text-primary_color rounded-lg '>1990</span>
                </div>
                </div>
              </div>
          </div>
          <div className='border-b-[1px]'>
              <p className='font-semibold text-[18px] font-heading text-secondry_color py-[10px]'>Filter by Brand</p>
          </div>
          <div>
            <div className='p-2 relative'>
              <input type="search" placeholder='Search your Brand' className='border-[1px] border-primary_color rounded-lg p-2 w-full focus:outline-none'/>
              <FaSearch  className='absolute top-[20px] right-[20px] cursor-pointer'/>
            </div>

            <div className='checkbox_item p-2 '>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
              <div className='flex justify-between items-center my-[10px]'>
              <div>
              <input type="checkbox" className='mr-[15px] cursor-pointer '/>
              <span>NICKA K</span>
              </div>
              <span className='px-[10px] bg-[#F3F3F3] text-primary_color rounded-lg'>20</span>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Sidebar