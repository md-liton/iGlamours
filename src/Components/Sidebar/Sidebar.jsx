import React, { useState } from 'react'
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";


const Sidebar = () => {

    const [makeup,setMakeup]=useState(false)

    console.log(makeup);
    


  return (
      <div className='mr-[20px]'>
          <div className='border-b-[1px]'>
              <p className='font-semibold text-[18px] font-heading text-secondry_color py-[10px]'>Filter by Price</p>
              {/* <input type="range"/> */}
          </div>
          <div className="catagory_subcatagory">
              <div className='border-b-[1px]'>
                  <p className='font-semibold text-[18px] font-heading text-secondry_color py-[10px] '>Product Categories</p>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Free Delivery</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div className='flex justify-between items-center py-[10px]'>
                <p className='text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 flex items-center gap-[10px]'><span>Top Selling</span> <SlEnergy /></p>
                <span className='px-[5px] text-white bg-primary_color rounded-lg font-bold'>500</span>
              </div>
              <div >
                <div className='flex justify-between items-center py-[10px]'>
                <p className={`text-[14px] font-paragraph text-secondry_color cursor-pointer hover:text-primary_color duration-300 ` }
                 onClick={()=>setMakeup(!makeup)}>MakeUP</p>
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
          </div>
      </div>
  )
}

export default Sidebar