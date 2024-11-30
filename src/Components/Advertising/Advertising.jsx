import React, { useState } from 'react'
import adv from '../../assets/adv.jpg'
import { IoMdClose } from "react-icons/io";


const Advertising = () => {

    const [close,setClose]=useState(false)



  return (
    <section className={`py-[30px] ${close && 'hidden'}`}>
        <div className="container">
            <div className="advertising_main w-full h-[100px] lg:h-[200px] relative">
                <img src={adv} className='h-full w-full' alt="adv" />
                <IoMdClose  className='absolute top-[10px] right-[10px] cursor-pointer ' onClick={(e)=>(setClose(true))}/>
            </div>
        </div>
    </section>
  )
}

export default Advertising