import React from 'react'
import { FaSackDollar} from 'react-icons/fa6'
import {HiOutlineShieldCheck} from 'react-icons/hi'
import {HiOutlineWrenchScrewdriver} from 'react-icons/hi2'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {RiShipLine,RiExchangeDollarLine} from 'react-icons/ri'
const TradeAssuranceMenu = () => {
  return (
    <div className='flex justify-center items-center py-6 space-x-20 px-10 border-t'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl mb-6 flex font-semibold'><FaSackDollar className='text-yellow-500 mt-0.5 mr-2'/>Trade Assurance</h1>
            <h1 className='font-bold mb-6 text-4xl'>Enjoy protection from payment to delivery</h1>
          <button className='w-full mb-4 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-1 font-medium text-white rounded-full'>Learn More</button>

        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='border cursor-pointer rounded-md mb-4 flex justify-center items-center py-10 px-3 bg-gray-100'>
                <span className='border rounded-full p-1 mr-3 bg-yellow-200'><HiOutlineShieldCheck className='text-5xl'/></span>
                <span className='text-xl mr-10 w-52'>Safe & Easy Payments</span>
                <span><AiOutlineArrowRight className='text-2xl'/></span>
                </div>
            <div className='border cursor-pointer rounded-md  flex justify-center items-center py-10 px-3 bg-gray-100'>
            <span className='border rounded-full p-1 mr-3 bg-yellow-200'><RiShipLine className='text-5xl'/></span>
                <span className='text-xl mr-10 w-52'>Shipping & Logistics Services</span>
                <span><AiOutlineArrowRight className='text-2xl'/></span>
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='border cursor-pointer rounded-md mb-4 flex justify-center items-center py-10 px-3 bg-gray-100'>
                <span className='border rounded-full p-1 mr-3 bg-yellow-200'><RiExchangeDollarLine className='text-5xl'/></span>
                <span className='text-xl mr-10 w-52'>Safe & Easy Payments</span>
                <span><AiOutlineArrowRight className='text-2xl'/></span>
                </div>
            <div className='border cursor-pointer rounded-md  flex justify-center items-center py-10 px-3 bg-gray-100'>
            <span className='border rounded-full p-1 mr-3 bg-yellow-200'><HiOutlineWrenchScrewdriver className='text-5xl'/></span>
                <span className='text-xl mr-10 w-52'>Shipping & Logistics Services</span>
                <span><AiOutlineArrowRight className='text-2xl'/></span>
            </div>
        </div>
    </div>
  )
}

export default TradeAssuranceMenu