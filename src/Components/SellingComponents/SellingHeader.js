import React from 'react'

const SellingHeader = () => {
  return (
    <div className='px-32 py-20 flex justify-between'>
        <div>
            <h1 className='text-[28px] text-[#333333]'>Sell on ALibaba.com</h1>
            <h1 className='text-[48px] text-[#333333] font-bold'>Reach millions of <br/>B2B buyers globally</h1>
            <div className='flex items-center mt-20 space-x-10'>
                <button className=' bg-blue-600 rounded-full px-12 py-[12px] flex items-center  text-white'>Start Selling</button>
                <button className='border border-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300 rounded-full px-3 py-2.5 text-blue-500 font-medium   flex  items-center'>Chat with Consultant</button>
            </div>
        </div>
        <div>
            <h1 className='text-[36px] text-[#333333]'>40,000,000+</h1>
            <h1 className='text-[#333333] mb-4'>active buyers Globally</h1>
            <h1 className='text-[36px] text-[#333333]'>280,000+</h1>
            <h1 className='text-[#333333] mb-4'>Product inquiries daily</h1>
            <h1 className='text-[36px] text-[#333333]'>200+</h1>
            <h1 className='text-[#333333] mb-4'>countries and regions<br/> represented</h1>
        </div>
    </div>
  )
}

export default SellingHeader