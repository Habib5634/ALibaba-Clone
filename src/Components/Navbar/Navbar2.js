import React, { useState } from 'react'

import {SlUser} from 'react-icons/sl'
import {BsChatLeftText,BsPhone} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {LiaFunnelDollarSolid} from 'react-icons/lia'
import {AiFillFacebook,AiFillLinkedin,AiFillTwitterCircle,AiOutlineShoppingCart,AiOutlineBars} from 'react-icons/ai'


import { FaCamera, FaSearch } from 'react-icons/fa'

const Navbar2 = () => {
  const [navMenu, setNavMenu] = useState(false);
    return (
      <>
        <div className={` w-full h-20 px-14 md:px-4 flex border-b-2 text-black bg-white `}>

            <header className="flex items-center justify-between w-full px-6 ">
                <div className=" items-center  ">

                    <img
                        src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'
                            
                        alt="pngfuel"
                        className="mr-3 w-48 h-auto"
                    />




                </div>
                <div className="flex ml-6  mt-2 border-2 border-orange-500 bg-white w-3/5 rounded-full ">
            <input
              type="text"
              className="border-none outline-none bg-transparent flex-grow px-2"
              placeholder="Search..."
            />
            <div className="flex items-center ">
              <FaCamera className="text-gray-500 mr-2 text-2xl" />
              <button className="bg-orange-500 flex justify-center items-center text-white py-2 px-7  rounded-r-full">
                <FaSearch className="mr-2" />Search
              </button>
            </div>
          </div>
                <div>

                    <ul className={`hidden md:flex list-none  justify-center space-x-5 font-semibold text-black bg-white`}>
                       

                    <li 
    onMouseEnter={()=>setNavMenu(true)}
    onMouseLeave={()=>setNavMenu(false)}
    className="p-2 w-fit flex menu-item text-[14px] text-gray-500 mt-2">
          <SlUser className=" text-[32px] mr-2 mt-1 "/>
          <span className='flex flex-col text-[12px] text-[#333333] font-thin'>Sign in <span>Join for free</span></span>
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
<li className="p-2 w-fit flex menu-item text-[14px] text-[#333333]">
  <BsChatLeftText className=" text-[20px] mr-2 mt-1 text-"/>
</li>
                       <li li className="p-2  w-fit flex menu-item text-[14px] text-[#333333]">
                       
                        <span className='flex flex-col text-[12px] font-thin'>  <LiaFunnelDollarSolid className=" text-[24px] mr-2 mt-1 "/>Order</span>
                       </li>
                       <li li className="p-2  w-fit flex menu-item text-[14px] text-[#333333]">
                       
                       <span className='flex flex-col text-[12px] font-thin'>  <AiOutlineShoppingCart className=" text-[24px] mr-2 mt-1 "/>Card</span>
                      </li>



                    </ul>
                </div>




            </header>

          


        </div>
        <div className='flex border-b justify-between my-2 px-4'>
            <div className='flex justify-center items-center border-r px-2 font-extralight'><AiOutlineBars/>Categories</div>
            <div className='flex justify-center space-x-3'>
              <div className='flex justify-center items-center border-r px-2 font-extralight'><BsPhone/>Get the App</div>
              <div className='flex justify-center items-center border-r px-2 font-extralight'>English - USD</div>
              <div className='flex justify-center items-center border-r px-2 font-extralight'><span className='mr-1'>Ship to:</span><span className='mr-1'><img src='https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/pk.png' className='w-6 h-auto' alt='pk'/></span>PK</div>
            </div>
          </div>

        </>
    )
}

export default Navbar2