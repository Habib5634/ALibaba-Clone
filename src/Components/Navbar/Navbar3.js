import React from 'react'

const Navbar3 = ({title}) => {
  return (
    <div className='flex shadow-md  h-20 items-center px-28'>
        <img
          src='https://s.alicdn.com/@img/imgextra/i2/O1CN0153JdbU26g4bILVOyC_!!6000000007690-2-tps-418-58.png'

          alt="pngfuel"
          className="mr-3 w-48 h-auto"
        />
        <h1 className='text-[22px]'>{title}</h1>
      </div>
  )
}

export default Navbar3