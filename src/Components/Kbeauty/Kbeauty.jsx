import React from 'react'
import bg from '../../assets/hairbg.png'
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import Sidebar from '../Sidebar/Sidebar'
import { FaSearch } from 'react-icons/fa'

const Kbeauty = () => {
  return (
    <section>
      <div className="bg  h-[200px] w-full">
        <img src={bg} alt="img" className='h-[200px] w-full' />
      </div>
        <div className="container">
            <div className="kbeauty_main flex py-[20px]">
          <div className='w-1/4'>
          <Sidebar/>
          </div>
          <div className='w-3/4'>
          <div className='mb-[15px] relative'>
            <input type="search" placeholder='Search your product'  className=' w-full focus:outline-none border-[1px] border-primary_color px-[10px] rounded-[5px] p-[7px]'/>
            <FaSearch  className='absolute top-0 right-[15px] cursor-pointer border-l-[1px] border-primary_color h-full pl-[10px] text-[30px]'/>
          </div>
          <div className=' flex gap-[15px] flex-wrap'>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product2} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product3} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product2} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product3} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white w-[250px] h-[450px]'>
              <div className=' '>
                <img src={product} alt="img" className=']' />
              </div>
              <div>
                <h4 className='text-[18px] font-bold font-heading text-secondry_color'>Lightness Keratin Treatment – Black</h4>
                <p className='text-[12px] font-semibold font-paragraph py-[10px]'>HAIR,Hair Care,Hair Treatment,Hair Styling</p>
                <div className='flex gap-[15px]'>
                  <span className='text-[#A5A5A5]'><s>2200Tk</s></span>
                  <span className='text-[15px] font-bold font-heading text-primary_color'>1699TK</span>
                </div>
                <div className="btn flex justify-center items-center py-[15px]">
                  <button className='py-[10px] px-[15px] border-[1px] border-primary_color bg-primary_color rounded-lg font-bold font-heading text-white hover:bg-transparent hover:text-secondry_color duration-300'>ADD TO CART</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        
            </div>
        </div>
    </section>
  )
}

export default Kbeauty