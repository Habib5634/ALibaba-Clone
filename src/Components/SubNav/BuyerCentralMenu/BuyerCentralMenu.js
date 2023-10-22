import React from 'react'

const BuyerCentralMenu = () => {
  return (
    <div className='flex justify-center space-x-20 py-6 border-t'>
        <div className='flex flex-col justify-start items-start'>
            <h1 className='font-semibold mb-4'>Get Started</h1>
            <button className='text-gray-800 hover:underline mb-4'>What is Alibaba.com</button>
        </div>
        <div className='flex flex-col justify-start items-start'>
        <h1 className='font-semibold mb-4'>Why Alibaba.com</h1>
            <button className='text-gray-800 hover:underline mb-4'>How Sourcing works</button>
            <button className='text-gray-800 hover:underline mb-4'>Membership Programs</button>
        </div>
        <div className='flex flex-col justify-start items-start'>
        <h1 className='font-semibold mb-4'>Trade Services</h1>
        <button className='text-gray-800 hover:underline mb-4'>Trade Assurance</button>
        <button className='text-gray-800 hover:underline mb-4'>Logistic Services</button>
        <button className='text-gray-800 hover:underline mb-4'>Letter of Credit </button>
        <button className='text-gray-800 hover:underline mb-4'>Production Monitoring $ InspectionServices</button>

        </div>
        <div className='flex flex-col justify-start items-start'>
        <h1 className='font-semibold mb-4 justify-start items-start'>Resources</h1>
        <button className='text-gray-800 hover:underline mb-4'>Success Stories</button>
        <button className='text-gray-800 hover:underline mb-4'>Blogs</button>
        <button className='text-gray-800 hover:underline mb-4'>Industry Report</button>
        <button className='text-gray-800 hover:underline mb-4'>Help Center</button>

        </div>
        <div className='flex flex-col justify-start items-start'>
        <h1 className='font-semibold mb-4'>Webinar</h1>
        <button className='text-gray-800 hover:underline mb-4'>Overview</button>
        <button className='text-gray-800 hover:underline mb-4'>Meet the Peers</button>
        <button className='text-gray-800 hover:underline mb-4'>Ecommernce Academy</button>
        <button className='text-gray-800 hover:underline mb-4'>How To Source on Alibaba.com</button>

        </div>
    </div>
  )
}

export default BuyerCentralMenu