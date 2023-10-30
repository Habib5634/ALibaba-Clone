import React, { useState } from 'react'

import {SlUser} from 'react-icons/sl'
import {FcGoogle} from 'react-icons/fc'
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle} from 'react-icons/ai'



const SigninMenu = () => {
    const [navMenu, setNavMenu] = useState(false);
  return (
    <>
    <li 
    onMouseEnter={()=>setNavMenu(true)}
    onMouseLeave={()=>setNavMenu(false)}
    className="p-2 w-fit flex menu-item text-[14px] hover:text-white">
          <SlUser className=" text-xl mr-2 "/>Sign in
          {navMenu && 
        <div className="absolute bg-white w-1/5 -ml-24 mt-8  p-5 z-50 rounded-xl py-3 shadow-xl text-black">
 <h1 className='text mb-4'>Welcome to Alibaba.com</h1>
 <button className='w-full my-4 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-1 font-medium text-white rounded-full'>Sign in</button>
 <p className='text-center'>Or continue with:</p>
 <div className='flex justify-center items-center text-4xl my-4 space-x-2 '>
<AiFillFacebook className='text-blue-500'/>


<FcGoogle/>
<AiFillLinkedin className='text-blue-600'/>
<AiFillTwitterCircle className='text-blue-400'/>
 </div>
 <p className='text-gray-500 text-xs leading-loose'>By signing in via social media, I agree to <span className=' underline '>the Alibaba.com Free Membership Agreement and Privacy Policy,</span> and to receive emails about the platform’s products and services.</p>
          
 <hr className='border border-gray-300 w-full my-4' />

 <ul>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>My Alibaab</li>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>Orders</li>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>Messages</li>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>RFQs</li>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>Favourite</li>
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>Account</li>
    <hr className='border border-gray-300 w-full my-4' />
    <li className='text-gray-600 py-2 w-full hover:bg-gray-200 px-2 hover:text-black'>Membership Program</li>
 </ul>
        </div>
        }

          
          </li>
         
    </>
  )
}

export default SigninMenu