import React from 'react'
import { LiaCommentDollarSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";
import { FcApproval } from "react-icons/fc";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import SellerProfileSubNav from './SellerProfileSubNav';
const SellerHeader = ({company,phone, email}) => {
  return (
    <div className='px-28 bg-black '>
    <div className=' bg-gray-500 px-2 py-3 text-[14px] flex items-center gap-4'>
    <p className='bg-slate-100 text-black w-fit rounded-full px-2 font-medium text-[12px] '>9 <sup>Yrs</sup></p>
    
    <LiaCommentDollarSolid className='text-xl'/>
    
    <p className='text-white font-medium'>{company}</p>

    <p className='flex justify-center items-center gap-1 text-white font-medium'><CiHeart className='text-xl' /> Favoirite Supplier</p>
    </div>
    <div className='bg-gray-200 p-4 flex items-center'>
    <FcApproval size={90}/>
    <div className='ml-4'>
    <div>
        <h1 className='text-4xl font-bold capitalize text-gray-800'> {company} Co,Ltd</h1>
    </div>
    <div className='flex gap-20 mt-3'>
        <p className='flex items-center gap-1'><FaPhone  size={25}/> {phone}</p>
        <p className='flex items-center gap-1'><IoMdMail size={25} />{email}</p>
    </div>
    </div>
    </div>
    <SellerProfileSubNav/>
    
    </div>
  )
}

export default SellerHeader