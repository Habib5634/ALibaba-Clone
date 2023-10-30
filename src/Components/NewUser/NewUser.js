import React, { useState } from 'react'
import { BsGrid } from 'react-icons/bs'

const NewUser = () => {
  const [isHover, setIsHover] = useState(null)
  const handleMouseEnter = (itemId)=>{
setIsHover(itemId)
  }
  const handleMouseLeave = () =>{
setIsHover(null)
  }
  const items = [
    {
      id: 1,
      title: 'Millions of Business Offering',
      description: 'Explore Products and suppliers for your business from millions of offerings worldwide',
      img: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01tbfptg1Fv1tsyww7q_!!6000000000548-2-tps-96-96.png',
      hoverimg:'https://s.alicdn.com/@img/imgextra/i3/O1CN01IqRqQr1UYmu3AOqmF_!!6000000002530-2-tps-96-96.png'
    },
    {
      id: 2,
      title: 'Assured quality and transactions',
      description: 'Ensure production wuality from verified suppliers, for your bussiness from millions of offerings worldwide.',
      img: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01VxEwc91YXeNmcyV6j_!!6000000003069-2-tps-96-96.png',
      hoverimg:'https://s.alicdn.com/@img/imgextra/i1/O1CN01yTM8EE1GOLFPjalEn_!!6000000000612-2-tps-96-96.png'
    }
    ,
    {
      id: 3,
      title: 'One-stop trading solution ',
      description: 'Order seemlessly from product/suppliers search to order management , payment, and fullfillment',
      img: 'https://s.alicdn.com/@img/imgextra/i2/O1CN01WxanpW1Hv9ESW9cfs_!!6000000000819-2-tps-96-96.png',
      hoverimg:'https://s.alicdn.com/@img/imgextra/i3/O1CN01TFyXvb261lkMrez96_!!6000000007602-2-tps-96-96.png'
    }
    ,
    {
      id: 4,
      title: 'Personalized trading experience ',
      description: 'Get curated benefits, such as discounted samples and dedicated support, tailored to your bussiness growth stage',
      img: 'https://s.alicdn.com/@img/imgextra/i4/O1CN010nrLfB25RaSKdVtHu_!!6000000007523-2-tps-96-96.png',
      hoverimg:'https://s.alicdn.com/@img/imgextra/i4/O1CN01xIFSCp1DYT9tsnHfj_!!6000000000228-2-tps-96-96.png'
    }
  ];

  return (
    <div className='bg-[#51200b] px-20 py-14  flex justify-center space-x-6'>
      {items.map(item => (
        <div
        onMouseEnter={() => handleMouseEnter(item.id)}
        onMouseLeave={handleMouseLeave}
        key={item.id} className='flex w-1/4 bg-white bg-opacity-10 flex-col rounded-2xl p-6 hover:bg-white hover:bg-opacity-20 text-white' >
         {isHover == item.id ? (
          <span className='rounded-full w-fit p-2 bg-[#7b3314f0]'>
            <img src={item.hoverimg} alt='imags' className='h-10 w-10'/>
          </span>
         ):(
          <span className='rounded-full w-fit p-2 bg-[#7b3314f0]'>
            <img src={item.img} alt='imags' className='h-10 w-10'/>
          </span>
         )} 
          <h1 className='font-semibold text-[24px] my-5'>{item.title}</h1>
          <h2 className='text-[16px]'>{item.description}</h2>
        </div>
      ))}
    </div>
  )
}

export default NewUser
