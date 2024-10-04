import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";




const Whatsapp = () => {
  return (
    <section className='fixed right-[20px] bottom-[20px] cursor-pointer'>
        <div className='h-[60px] w-[60px] rounded-full  flex justify-center items-center'>
        <IoLogoWhatsapp className='h-full w-full text-[#00E676]' />
        </div>
    </section>
  )
}

export default Whatsapp