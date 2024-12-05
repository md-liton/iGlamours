import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <section className=' flex justify-center items-center md:py-[47px] py-[30px]'>
    {/* <ToastContainer position="top-center" theme="dark"/> */}
        <div className=' h-[250px] w-[400px] p-[50px] rounded-[10px]'>
            <h2 className='text-secondary_color font-bold font-nunito text-[25px]'>Forgot Password</h2>
            <p className='text-[#585D8E] font-bold font-nunito text-[15px]'>Email</p>
            <input  className='mb-[15px] bg-transparent border-b-[1px] border-black w-full py-[10px] focus:outline-none' type="email " placeholder='Enter Your Email' />
            <div className='flex gap-[25px]'>
                <Link  className='py-[10px] px-[25px] bg-primary_color rounded-[10px] text-white'>Reset</Link>
                <Link to='/login'  className='py-[10px] px-[25px] bg-primary_color rounded-[10px] text-white'>Back to Login</Link>
            </div>
        </div>
    </section>
  )
}

export default ForgotPassword