import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {BsEyeSlash,BsEye} from 'react-icons/bs';
// import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    // const navigate = useNavigate();
    // const provider = new GoogleAuthProvider();
    // const dispatch = useDispatch();


    // const [email,setEmail]=useState('')
    // const [emailErr,setEmailErr]=useState('')


    // const [password,setPassword]=useState('')
    // const [passwordErr,setPasswordErr]=useState('')
    const [passwordShow,setPasswordShow]=useState(false)
    // const [loading,setLoading] = useState(false)


    // const handleEmail =(e)=>{
    //     setEmail(e.target.value);
    //     setEmailErr('')
    // }

    // const handlePassword =(e)=>{
    //     setPassword(e.target.value);
    //     setPasswordErr('');
    // }
  return (
    <section className=" md:py-[60px] py-[30px]">
    {/* <ToastContainer position="top-center" theme="dark"/> */}
    <div className="container">

        <div className="loin_main  flex justify-center items-center ">
        <div>
        <h1 className="font-nunito font-bold text-[35px] text-secondary_color">Login to your account!</h1>
                    <div className="mt-[35px] relative">
                        <p className=" bg-white  text-[16px] font-bold font-nunito text-[#585D8E]">Email Address</p>
                        <input  className=" w-full py-[10px] border-b border-[#B8B9CE] text-[20px] font-bold font-nunito text-secondary_color focus:outline-none" type="email" placeholder="Email"/>
                        <p className='absolute left-0 bottom-[-27px] text-[16px] font-bold font-nunito text-red-500'>emailErr</p>
                    </div>
                    <div className="mt-[35px] relative">
                        <p className=" bg-white  text-[16px] font-bold font-nunito text-[#585D8E]">Email Address</p>
                        <input  className=" w-full py-[10px] border-b border-[#B8B9CE] text-[20px] font-bold font-nunito text-secondary_color focus:outline-none" type={passwordShow ? 'text' : 'password'} placeholder="Password"/>
                        <p className='absolute left-0 bottom-[-27px] text-[16px] font-bold font-nunito text-red-500'>passwordErr</p>
                        {
                            !passwordShow ? <BsEyeSlash onClick={()=> setPasswordShow(!passwordShow)} className='absolute top-[40px] right-[20px]' />
                            : <BsEye onClick={()=> setPasswordShow(!passwordShow)} className='absolute top-[40px] right-[20px]'/>
                        }
                        
                        
                    </div>
                    <div >
                    <button  className="mt-[30px] text-center w-full py-[15px]  bg-primary_color rounded-[10px] text[20px] font-nunito font-semibold text-white">Login to Continue</button>
                    </div>



                    {/* {
                        loading ?
                        <div className=' absolute top-[30%] left-[50%] translate-y-[-50%] bg-[#e5e5e5] w-[500px] h-[300px] flex justify-center items-center rounded-[10px]'>
                        <div>


                        <h1 className='text-secondary_color text-[25px] font-semibold'>please wait</h1>
                        <div className='flex justify-center items-center'>
                        <ColorRing visible={true} height="80" width="80" ariaLabel="blocks-loading" wrapperStyle={{}}wrapperClass="blocks-wrapper" colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}/>
                        </div>


                        </div>

                    </div>
                    : <div onClick={handleLogin}>
                    <button  className="mt-[30px] text-center w-full py-[15px]  bg-primary_color rounded-[10px] text[20px] font-nunito font-semibold text-white">Login to Continue</button>
                </div>
                    } */}

                    <p className="mt-[10px] text-center text-[15px] font-normal font-open text-secondary_color">Don’t have an account ? <Link to='/registration' className="font-bold text-[#EA6C00] cursor-pointer">Sign Up</Link ></p>
                    <div className='text-center'>
                    <Link to='/forgotpassword' className="mt-[10px]  text-[15px] font-normal font-open text-secondary_color cursor-pointer">forgot password</Link>
                    </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Login