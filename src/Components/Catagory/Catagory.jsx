import React from 'react'
import img1 from '../../assets/essential.png'
import img2 from '../../assets/haircare.png'
import img3 from '../../assets/skin.png'
import img4 from '../../assets/mom.png'
import img5 from '../../assets/undergarments.png'
import img6 from '../../assets/personal.png'
import img7 from '../../assets/makeup.png'
import img8 from '../../assets/k-beauty.png'

const Catagory = () => {
  return (
    <section className='md:py-[50px] py-[30px]'>
        <div className="container">
            <div className="catagory_main">
            <h2 className='font-bold md:text-[55px] text-[45px] font-heading text-secondry_color text-center py-[20px]'>Explore Endless Glamour</h2>
                <div className='flex items-center gap-[20px] flex-wrap justify-center'>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img1} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img2} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img3} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img4} alt=""  className='w-full h-full'/>
                    </div>
                </div>
                <div className='flex items-center flex-wrap justify-center gap-[20px] mt-[20px]'>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img5} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img6} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img7} alt=""  className='w-full h-full'/>
                    </div>
                    <div className='md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-lg overflow-hidden cursor-pointer'>
                        <img src={img8} alt=""  className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Catagory