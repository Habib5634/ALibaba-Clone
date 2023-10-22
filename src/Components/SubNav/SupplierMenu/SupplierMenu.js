import React from 'react'
import {MdOutlineHandshake} from 'react-icons/md'
import {AiOutlineGlobal} from 'react-icons/ai'
import {TbCodeCircle} from 'react-icons/tb'
const SupplierMenu = () => {
  return (
    <div className='flex justify-center items-center py-6 space-x-10 border-t'>
        <div className='w-60 h-52 border flex flex-col items-center justify-center'>
            <AiOutlineGlobal className='text-6xl'/>
            <button className='text-gray-800 hover:underline'>For suppliers based outside of Mainland China</button>
            </div>
        <div className='w-60 h-52 border flex flex-col items-center justify-center'>
            <TbCodeCircle className='text-6xl'/>
            <button className='text-gray-800 hover:underline'>For suppliers based in Mainland China</button>
            </div>
        <div className='w-60 h-52 border flex flex-col justify-center space-x-4 items-center'>
        <MdOutlineHandshake className='text-6xl'/>
            <button className='text-gray-800 hover:underline'>Partner Program</button>
        </div>
    </div>
  )
}

export default SupplierMenu