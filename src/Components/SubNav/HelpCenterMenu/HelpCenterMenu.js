import React from 'react'
import {PiBuildingsBold} from 'react-icons/pi'
import {LiaBlackTie} from 'react-icons/lia'
const HelpCenterMenu = () => {
  return (
    <div className='flex justify-center items-center py-6 space-x-10 border-t'>
        <div className='w-60 h-52 border flex flex-col items-center justify-center'>
            <LiaBlackTie className='text-6xl'/>
            <button className='text-gray-800 hover:underline'>For Buyer</button>
            </div>
        <div className='w-60 h-52 border flex flex-col items-center justify-center'>
            <PiBuildingsBold className='text-6xl'/>
            <button className='text-gray-800 hover:underline'>For Supplier</button>
            </div>
        <div className='w-60 h-52 border flex flex-col justify-center space-x-4 items-center'>
        <button className='text-gray-800 hover:underline mb-4'>Open a Dispute</button>
        <button className='text-gray-800 hover:underline mb-4'>Report IPR infringement</button>
        <button className='text-gray-800 hover:underline'>Report abuse</button>
        </div>
    </div>
  )
}

export default HelpCenterMenu