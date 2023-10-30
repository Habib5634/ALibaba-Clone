import React, { useState } from 'react'


import CountryCodeDropdown from './Dropdown';


const ShipToPkMenu = () => {
    const [navMenu, setNavMenu] = useState(false);
  return (
    <>
    <li 
    onMouseEnter={()=>setNavMenu(true)}
    onMouseLeave={()=>setNavMenu(false)}
    className="p-2 w-fit menu-item  text-[14px] hover:text-white flex"><span className='mr-1'>Ship to:</span><span className='mr-1'><img src='https://s.alicdn.com/@u/mobile/g/common/flags/1.0.0/assets/pk.png' className='w-6 h-auto' alt='pk'/></span>PK


          {navMenu && 
        <div className="absolute bg-white max-w-sm mt-3 -ml-24 p-5 z-50 rounded-xl py-3 shadow-xl text-black">

            <h1 className='text mb-4'>Specify Your Location</h1>
            <p className='text-gray-500 text-sm'>Shipping options and fees vary based on your location</p>
            <button className='w-full my-4 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-1 font-medium text-white rounded-full'>Sign in to Add Address</button>
            <div className='flex items-center justify-center '>
      <hr className='border border-gray-300 w-full' />
      <p className='mx-4 text-gray-300'>or</p>
      <hr className='border border-gray-300 w-full' />
    </div>
            <CountryCodeDropdown/>
           
            <div className="flex items-center p-1 border my-4 border-gray-500">
            
            <input
              type="text"
              id="name"
              name="name"
placeholder='Enter City or ZIP Code'
              className="w-full p-1 ml-3 text-gray-500  outline-none bg-transparent border-none"
            />
          </div>

          <button className='w-full mb-4 bg-orange-500 hover:bg-orange-600 transition-colors duration-300 py-1 font-medium text-white rounded-full'>Save</button>


        </div>
        }
          </li>
    </>
  )
}

export default ShipToPkMenu