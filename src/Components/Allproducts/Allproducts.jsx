import React from 'react'
import product from '../../assets/product.jpg'
import product2 from '../../assets/product2.jpg'
import product3 from '../../assets/product3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Allproducts = () => {

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
      <section className='py-[50px] bg-secondry_color'>
          <div className="container">
              <div className="products_main ">




                <h1 className='text-primary_color text-[40px] font-bold font-heading px-[10px] mt-[30px]'>Makeup</h1>

                  <Slider {...settings} >
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                  </Slider>




                  <h1 className='text-primary_color text-[40px] font-bold font-heading px-[10px] mt-[30px]'>Skin Care</h1>
                  <Slider {...settings} >
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                  </Slider>

                  <h1 className='text-primary_color text-[40px] font-bold font-heading px-[10px] mt-[30px]'>K-Beauty</h1>


                  <Slider {...settings} >
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                      <div className='border rounded-[20px] cursor-pointer  p-[15px]  bg-white '>
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
                  </Slider>


              </div>
          </div>
      </section>
  )
}

export default Allproducts