import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  BussinessServices= () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Freightt Agents',
      image: 'https://s.alicdn.com/@sc04/kf/H879edacd90bf49a090a868286ca3a24cD.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Air Frieght',
      image: 'https://s.alicdn.com/@sc04/kf/H4752ff57c6fd4990bc910765db7300dfq.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Sea Freight',
        image: 'https://s.alicdn.com/@sc04/kf/H970da751344d4685b73c37c59e73acd5Y.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Express Service',
        image: 'https://s.alicdn.com/@sc04/kf/H306ff554b7b9486fb91af7482c48f0c5W.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Inspection & Quality Controller',
        image: 'https://s.alicdn.com/@sc04/kf/He23b12504ac244f2b4959d9370adcc50f.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Wherehouse Services',
        image: 'https://s.alicdn.com/@sc04/kf/Hb09cabc3fcff4f36ab7b447554869f67T.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Railway Freight',
        image: 'https://s.alicdn.com/@sc04/kf/Hcbca708d6ef54ade910862ed1e409840R.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Custom Clearance',
        image: 'https://s.alicdn.com/@sc04/kf/H5d74e1e0c9aa4ed4b618bdbf3fa55b0e2.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Other Logistics',
        image: 'https://s.alicdn.com/@sc04/kf/H158054bfd14d470f9adab39183e02b94c.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Road Freight',
        image: 'https://s.alicdn.com/@sc04/kf/H41ef4d0b187e4b10badd0b885c12a93a9.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Bussiness Services<AiOutlineRight className='mt-1 ml-5'/>
      </h1>
      <div className='flex justify-center flex-wrap  items-center  mt-6'>
        {electronicsData.map(item => (
          <div key={item.id} className='flex w-1/4 p-2 mb-4 mt-5 flex-col justify-center items-center'>
            <img className='h-16 w-16 mb-4 rounded-full' src={item.image} alt={item.name} />
            <h1 className='text-center text-sm'>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}


export default BussinessServices

