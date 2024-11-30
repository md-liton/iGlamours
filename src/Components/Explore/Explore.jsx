import React from 'react'
import explore from '../../assets/explore.png'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Explore = () => {
  return (
    <section className=' bg-primary_color py-[30px]'>
        <div className="container">
            <div className="explore_main md:flex items-center ">
                <div className='md:w-1/2'>
                <img src={explore} alt="img" className='md:w-full w-[250px]'/>
                </div>
                <div className='md:w-1/2 text-white'>
                <h2 className='font-bold text-[25px] lg:text-[55px]  font-heading'>Explore Endless Glamour</h2>
                <h2 className='font-thin text-[18px] lg:text-[35px] font-heading'>with Every Click</h2>
                <p className='text-[13px] lg:text-[16px]'>Welcome to the World of Unparalleled Elegance
                At our online destination, we believe that glamour is more than just a look – it’s a lifestyle. From the moment you land on our page, you’re not just browsing; you’re stepping into a world where elegance and sophistication are at your fingertips. With every click, we invite you to explore a curated collection of luxurious products that promise to elevate your style and redefine your idea of beauty.</p>
                <div className='flex items-center gap-[30px] py-[30px]'>
                    <div className='bg-white text-secondry_color flex item-center py-[10px] px-[20px] rounded-lg gap-[5px]'>
                        <div className=''>
                            <img src={icon1} alt="icon"  />
                        </div>
                        <div className='font-bold md:text-[13px] lg:text-[15px] font-heading'>
                            <p >Lasting</p>
                            <p >Formulas</p>
                        </div>
                    </div>
                    <div className='bg-white text-secondry_color flex item-center py-[10px] px-[20px] rounded-lg gap-[5px]'>
                        <div className=''>
                            <img src={icon2} alt="icon"  />
                        </div>
                        <div className='font-bold md:text-[13px] lg:text-[15px]  font-heading'>
                            <p >Face skin</p>
                            <p >Protection</p>
                        </div>
                    </div>
                    <div className='bg-white text-secondry_color flex item-center py-[10px] px-[20px] rounded-lg gap-[5px]'>
                        <div className=''>
                            <img src={icon3} alt="icon"  />
                        </div>
                        <div className='font-bold md:text-[13px] lg:text-[15px]  font-heading'>
                            <p >Eye care</p>
                            <p >Products</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='bg-white text-secondry_color  font-bold py-[10px] px-[20px] rounded-lg mr-[20px] hover:text-primary_color duration-300'>SHOP NOW</button>
                    <button className='text-secondry_color  font-bold py-[10px] px-[20px] rounded-lg border-white border-[1px] hover:bg-white duration-300'>READ MORE</button>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Explore