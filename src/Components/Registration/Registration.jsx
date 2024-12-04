import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsEyeSlash,BsEye} from 'react-icons/bs';

const Registration = () => {
    const [passwordShow,setPasswordShow]=useState(false)
  return (
    <section className="registration md:py-[60px] py-[30px]">
    {/* <ToastContainer position="top-center" theme="dark"/> */}
    <div className="container">

        <div className="registration_main  flex justify-center items-center ">
        <div className="registration_left ">
                <div className="inf ">
                    <h1 className="font-nunito font-semibold text-[35px] text-secondary_color">Get started with easily register</h1>
                    <p className="font-nunito font-normal text-[21px] text-[#808080]">Free register and you can enjoy it</p>


                    <div className="mt-[35px] relative">
                        <input   className=" w-[70%] py-[10px] px-[30px] rounded-[10px] border border-4 border-[#B8B9CE] text-[20px] font-bold font-nunito text-secondary_color focus:outline-none" type="email" placeholder="Email"/>
                        <p className="absolute top-[-11px] left-[25px] bg-white px-[10px] text-[16px] font-bold font-nunito text-[#585D8E]">Email Address</p>
                        {/* <div className='absolute w-full top-[80%]'>
                        {
                            emailErr &&
                            <div className='w-[70%] bg-red-500 py-[5px] px-[30px] rounded-[5px] relative mt-[5px] z-[1]'>
                            <div className='h-[15px] w-[15px] bg-red-500 rotate-45 top-[-7px] left-[30px] absolute z-[-1]'> 
                            </div>
                            <p className='text-[17px] text-white z-[1]'>{emailErr}</p>
                            </div>
                        }
                        </div> */}
                    </div>
                    <div className="mt-[35px] relative">
                        <input  className=" w-[70%] py-[10px] px-[30px] rounded-[10px] border border-4 border-[#B8B9CE] text-[20px] font-bold font-nunito text-secondary_color focus:outline-none" type="text" placeholder="Full name"/>
                        <p className="absolute top-[-11px] left-[25px] bg-white px-[10px] text-[16px] font-bold font-nunito text-[#585D8E]">Full name</p>
                       <div className='absolute w-full top-[80%]'>
                       {/* {
                            fullNameErr &&
                            <div className='w-[70%] bg-red-500 py-[5px] px-[30px] rounded-[5px] relative mt-[5px] z-[1]'>
                            <div className='h-[15px] w-[15px] bg-red-500 rotate-45 top-[-7px] left-[30px] absolute z-[-1]'> 
                            </div>
                            <p className='text-[17px] text-white z-[1]'>{fullNameErr}</p>
                            </div>
                        } */}
                       </div>
                    </div>
                    <div className="mt-[35px] relative">
                        <input  className=" w-[70%] py-[10px] px-[30px] rounded-[10px] border border-4 border-[#B8B9CE] text-[20px] font-bold font-nunito text-secondary_color focus:outline-none" type={passwordShow ? 'text' : 'password'} placeholder="Password"/>

                        {
                            passwordShow ? <BsEye onClick={()=> setPasswordShow (!passwordShow)}  className='absolute top-[20px] right-[170px]'/>
                            : <BsEyeSlash onClick={()=> setPasswordShow (!passwordShow)} className='absolute top-[20px] right-[170px]'/>
                        }

                        <p className="absolute top-[-11px] left-[25px] bg-white px-[10px] text-[16px] font-bold font-nunito text-[#585D8E]">Password</p>
                        <div className='absolute w-full top-[80%]'>
                        {/* {
                            passwordErr &&
                            <div className='w-[70%] bg-red-500 py-[5px] px-[30px] rounded-[5px] relative mt-[5px] z-[1]'>
                            <div className='h-[15px] w-[15px] bg-red-500 rotate-45 top-[-7px] left-[30px] absolute z-[-1]'> 
                            </div>
                            <p className='text-[17px] text-white z-[1]'>{passwordErr}</p>
                            </div>
                        } */}
                        </div>
                    </div>
                    <div  >
                        <button  className="mt-[30px] text-center w-[70%] py-[15px]  bg-primary_color rounded-[100px] text[20px] font-nunito font-semibold text-white">Sign up</button>
                    </div>
                    <p className="mt-[10px] text-center w-[70%] text-[15px] font-normal font-open text-secondary_color">Already  have an account ? <Link to='/login' className="font-bold text-[#EA6C00] cursor-pointer">Sign In</Link></p>


                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Registration