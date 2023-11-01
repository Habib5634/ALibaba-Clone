import React from 'react'
import Navbar2 from '../../../Components/Navbar/Navbar2'
import data from '../ProductsData/Data'
const ConsumerElectronicsCategory = () => {

  return (
    <>
    <Navbar2/>
        <div className='bg-cover  bg-center h-[240px] flex flex-col justify-center items-center top-4' style={{ backgroundImage: 'url("https://img.alicdn.com/imgextra/i3/O1CN01IG66It1ZCrw40fyRX_!!6000000003159-2-tps-1920-240.png")' }}>
            <h1 className='text-[40px] text-white font-bold mb-2 -mt-9'>Consumer Electroncs</h1>
            <p className='text-base font-normal text-white'>Discover new and trending products</p>
        </div>


        <div className='flex flex-wrap justify-center bg-gray-200 xl:px-16 pt-10 overflow-hidden'>
  {data.map((item) => (
    <div key={item.id} className='px-2 w-1/5 '>
    <div
      
      className="flex bg-white flex-col justify-center pb-3   rounded-md  items-center mb-4"
    >
     
        <img
          src={item.imageUrl}
          alt="Image"
          className="object-cover w-[230px] h-[230px]" 
        />
      
      <h1 className='self-start mt-6 font-normal px-3 text-[14px] overflow-hidden  max-w-full'>
        {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
      </h1>
      <span className='self-start flex'>
        <p className='text-[16px] font-bold pr-2 mt-0.5 px-3'> ${item.price}  - ${item.realPrice}</p>
      </span>
      <p className='self-start px-3 text-[14px] font-normal'>Min, Order:{item.MinOrder} Pieces</p>
    </div>
    </div>
  ))}
</div>



    
    </>
  )
}

export default ConsumerElectronicsCategory