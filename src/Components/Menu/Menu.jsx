import React, { useEffect, useState } from 'react'

const Menu = () => {

  const [active,setActive]=useState('')

  
  
  return (
    <header className='bg-secondry_color py-[5px]'>
        <div className="container">
            <div className="header_main nav_bottom text-paragraph font-semibold cursor-pointe text-white py-[10px]">
            <ul className='flex justify-between items-center '>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'allproducts' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('allproducts'))}>All products</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'makeup' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('makeup'))}>MAKEUP</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'skincare' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('skincare'))}>SKIN CARE</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'hair' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('hair'))}>HAIR</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'personalcare' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('personalcare'))}>PERSONAL CARE</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'kbeauty' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('kbeauty'))}>K-BEAUTY</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'mom&baby' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('mom&baby'))}>MOM & BABY</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'undergarments' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('undergarments'))}>UNDERGARMENTS</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'essential' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('essential'))}>ESSENTIAL</li>
                    <li className={`cursor-pointer  rounded-full py-[5px] px-[10px]  ${active == 'blog' && 'text-primary_color bg-[#FABFE2]'}`} onClick={(e)=>(setActive('blog'))}>BLOG</li>
                  </ul>
            </div>
        </div>
    </header>
  )
}

export default Menu