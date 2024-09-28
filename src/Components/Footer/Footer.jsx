import React from 'react'
import logo from '../../assets/Logo4.png'
import pay from '../../assets/pay.png'
import { MdOutlineMail ,MdOutlinePhone  } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";




const Footer = () => {
  return (
    <footer className='py-[40px] bg-secondry_color text-white '>
        <div className="container">
            <div className="footer_main flex  ">
                <div className='w-1/2'>
                <img src={logo} alt="" />
                <h4 className='font-bold font-heading text-[25px]'><u>Our Store</u></h4>
                <p className='text-[14px] font-paragraph font-normal py-[10px]'>355/1 Dilu Road, Mogbazar, Dhaka 1217</p>
                <h4 className='font-bold font-heading text-[25px]'><u>We Accept</u></h4>
                <img src={pay} alt="img"  className='py-[10px] w-[320px]'/>
                </div>
                <div className='w-1/2 flex justify-between'>
                <div>
                <h5 className='text-[18px] font-bold font-heading'>USEFUL LINKS</h5>
                <ul className='text-[14px] font-paragraph font-normal py-[10px]'>
                    <li className='py-[5px]'>Privecy Policy</li>
                    <li>Refund and Returns Policy</li>
                    <li className='py-[5px]'>Contact Us</li>
                    <li>About Us</li>
                </ul>
                </div>
                <div>
                <h5 className='text-[18px] font-bold font-heading'>contact us</h5>
                <div className='flex items-center gap-[10px] text-[14px] font-paragraph font-normal py-[10px]'>
                    <div className='w-[20px] h-[20px] rounded-full border-[1px] border-white flex justify-center items-center '>
                    <MdOutlineMail  />
                    </div>
                    <p>support@iGlamours.com</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <div className='w-[20px] h-[20px] rounded-full border-[1px] border-white flex justify-center items-center'>
                    <MdOutlinePhone />
                    </div>
                    <p>09639 16 26 36</p>
                </div>
                <div className='flex items-center gap-[10px]  py-[10px]'>
                    <div className='w-[20px] h-[20px] rounded-full border-[1px] border-white flex justify-center items-center'>
                    <FaWhatsapp />
                    </div>
                    <p>01897-712 550</p>
                </div>
                </div>
                </div>
            </div>
        </div>
        <div className='border-t-[1px] border-[#777] py-[10px] mt-[30px] text-center pt-[15px]'>
            <p className='text-[#777]'>Based on <a href="" className='font-bold text-[18px] font-heading text-primary_color'>iGlamours </a> 2024 <a href="">Powered By <a href="" className='font-bold text-[18px] font-heading text-white'>DigitalKings Limited</a></a>.</p>
            <p className='pt-[10px] text-[#777]'>Developer by <a href="https://mdliton.vercel.app/" target='_blank' className='font-bold text-[18px] font-heading text-white'>Md Liton</a></p>
        </div>
    </footer>
  )
}

export default Footer