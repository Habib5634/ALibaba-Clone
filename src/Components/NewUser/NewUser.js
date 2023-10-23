import React from 'react'
import { BsGrid } from 'react-icons/bs'

const NewUser = () => {
  const items = [
    { id: 1, title: 'Millions of Business Offering', description: 'Explore Products and suppliers for your business from millions of offerings worldwide', icon: <BsGrid /> },
    { id: 2, title: 'Assured quality and transactions', description: 'Ensure production wuality from verified suppliers, for your bussiness from millions of offerings worldwide.', icon: <BsGrid /> }
    ,
    { id: 3, title: 'One-stop trading solution ', description: 'Order seemlessly from product/suppliers search to order management , payment, and fullfillment', icon: <BsGrid /> }
    ,
    { id: 4, title: 'Personalized trading experience ', description: 'Get curated benefits, such as discounted samples and dedicated support, tailored to your bussiness growth stage', icon: <BsGrid /> }
  ];

  return (
    <div className='bg-[#51200b] px-20 py-10 w-full flex justify-center space-x-6'>
      {items.map(item => (
        <div key={item.id} className='flex w-1/5 bg-white bg-opacity-10 flex-col rounded-2xl p-6 hover:bg-white hover:bg-opacity-20 text-white' >
          <span className='rounded-full w-fit p-2 bg-[#7b3314f0]'>
            {item.icon}
          </span>
          <h1 className='font-bold my-5'>{item.title}</h1>
          <h2>{item.description}</h2>
        </div>
      ))}
    </div>
  )
}

export default NewUser
