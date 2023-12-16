import React from 'react'
import { CiSearch } from "react-icons/ci";
import { LiaCommentDollarSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {AiOutlineDown } from "react-icons/ai";
import { Link } from 'react-router-dom';
const SellerProfileNav = () => {
  return (
    <div className='flex shadow-md justify-between h-20 items-center px-7'>
        <ul className='flex space-x-8'>
        <Link  to='/'>
        <li><img
          src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'

          alt="pngfuel"
          className="mr-3 w-48 h-auto"
        />
        </li></Link>
        <li className='text-[14px] text-gray-600 flex items-center  '>Sourcing Solutions<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center  '>Services & Memberships<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center  '>help<AiOutlineDown className='mt-1 ml-1'/></li>
        </ul>
    <ul className='flex space-x-6'>    
        <li className='flex justify-center items-center text-[14px] text-gray-600 gap-2'><CiSearch />On Alibaba</li>
        <li className='flex justify-center items-center text-[14px] text-gray-600 gap-2'><FaRegUser />My Alibaba</li>
        <li className='flex justify-center items-center text-[14px] text-gray-600 gap-2'><LiaCommentDollarSolid />Order</li>
        <li className='flex justify-center items-center text-[14px] text-gray-600 gap-2'><CiHeart /></li>
        <li className='flex justify-center items-center text-[14px] text-gray-600 gap-2'>English-USD <AiOutlineDown /></li>

    </ul>
    </div>
  )
}

export default SellerProfileNav