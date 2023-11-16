import React from 'react'

const SellingNav = () => {
  return (
    <div className='flex shadow-md justify-between  h-20 items-center px-10'>
        <ul className='flex space-x-4'>
        <li><img
          src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'

          alt="pngfuel"
          className="mr-3 w-48 h-auto"
        />
        </li>
        <li>Plateform</li>
        <li>Solution</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li>Bussiness Blogs</li>
        </ul>
        <ul className='flex items-center space-x-4'>
            <li className='flex- items-center'>
            <span className='mr-1 flex'><img src='https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/pk.png' className='w-6 h-auto' alt='pk'/></span>PK
            </li>
            <li>Signin</li>
            <li className='border border-blue-950 rounded-full px-2 py-0.5 flex items-center'>Chat With Consultant</li>
            <li className=' bg-blue-950 rounded-full px-2 py-0.5 flex items-center text-white'>Start Selling</li>
        </ul>
    </div>
  )
}

export default SellingNav