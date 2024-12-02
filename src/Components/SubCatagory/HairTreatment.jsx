import React from 'react'
import bg from '../../assets/makeupbg.png'
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import Sidebar from '../Sidebar/Sidebar'
import { FaSearch } from 'react-icons/fa'

const HairTreatment = () => {
  return (
    <section className=''>
      
      <div className="bg  h-[200px] w-full">
        <img src={bg} alt="img" className='h-[200px] w-full' />
      </div>
      <div className="container">
        <div className="hairtreatment_main md:flex md:py-[40px] py-[20px] ">
          <div className='md:w-1/4 hidden md:block'>
          <Sidebar/>
          </div>
          <div className='md:w-3/4'>
          <div className='mb-[15px] relative'>
            <input type="search" placeholder='Search your product'  className='w-full focus:outline-none border-[1px] border-primary_color px-[10px] rounded-[5px] p-[7px]'/>
            <FaSearch  className='absolute top-0 right-[15px] cursor-pointer border-l-[1px] border-primary_color h-full pl-[10px] text-[30px]'/>
          </div>
            <div className=' flex justify-center gap-[15px] flex-wrap'>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full'>
                  <img src={product} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full '>
                  <img src={product2} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full '>
                  <img src={product3} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full '>
                  <img src={product} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full '>
                  <img src={product2} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
              <div className='border rounded-[20px] cursor-pointer  md:p-[15px] p-[10px]  bg-white md:w-[250px] md:h-[450px] w-[180px] '>
                <div className='w-full '>
                  <img src={product} alt="img" className='' />
                </div>
                <div>
                  <h4 className='md:text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                  <p className='md:text-[12px] text-[11px] font-semibold font-paragraph md:py-[10px] py-[6px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                  <div className='flex gap-[15px]'>
                    <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                    <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                  </div>
                  <div className="btn flex justify-center items-center py-[15px]">
                    <button className='md:py-[10px] md:px-[15px] py-[6px] px-[10px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300 text-[13px] md:text-[16px]'>ADD TO CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='md:hidden'>
          <Sidebar/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HairTreatment