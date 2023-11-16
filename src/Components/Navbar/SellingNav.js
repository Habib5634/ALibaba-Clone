import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import SellingFormModal from '../SellingComponents/SellingFormModal';
const SellingNav = () => {
  const [isFormModal, setIsFormModal] = useState(false);


  const openForm = () => {
    setIsFormModal(true);
  };

  const closeForm = () => {
    setIsFormModal(false);
  };
  return (
    <>
    <div className='flex shadow-md justify-between  h-20 items-center px-7'>
        <ul className='flex space-x-8'>
        <li><img
          src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'

          alt="pngfuel"
          className="mr-3 w-48 h-auto"
        />
        </li>
        <li className='text-[14px] text-gray-600 flex items-center '>Plateform<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center '>Solution<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center '>Pricing<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center '>Resources<AiOutlineDown className='mt-1 ml-1'/></li>
        <li className='text-[14px] text-gray-600 flex items-center '>Bussiness Blogs<AiOutlineDown className='mt-1 ml-1'/></li>
        </ul>
        <ul className='flex items-center space-x-8'>
            <li className='flex items-center text-gray-600'>
            <img src='https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/pk.png' className='w-5 h-auto mr-2' alt='pk'/><span className=' flex'>PK</span>
            </li>
            <li className='text-gray-600'>Signin</li>
            <li className='border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-full px-3 py-1.5 flex text-[14px] items-center cursor-pointer'>Chat With Consultant</li>
            <li onClick={openForm} className='cursor-pointer bg-blue-600 rounded-full px-12 py-[7px] flex items-center text-[14px] text-white'>Start Selling</li>
        </ul>
    </div>
    {/* form modal */}
    <SellingFormModal isFormModal={isFormModal} closeForm={closeForm} />

    </>
  )
}

export default SellingNav