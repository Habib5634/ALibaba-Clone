import React from 'react'

const GetStarted = () => {
  return (
    <div className="bg-cover bg-center flex flex-col w-full" style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i3/O1CN01FaQ37w1Zb91Cymass_!!6000000003212-0-tps-1920-456.jpg")' }}>
        <div className='flex flex-col justify-center items-center py-36'>
            <h1 className='text-6xl mb-6 font-semibold text-white '>Ready to get started?</h1>
            <p className='text-2xl mb-6 font-semibold text-white '>Explore millions of products from trusted suppliers by signing up today!</p>
            <button className='py-4 text-xl px-12 rounded-full bg-orange-500 hover:bg-orange-600 transition-colors duration-300 text-white font-medium'>Sign Up</button>
        </div>

    </div>
  )
}

export default GetStarted