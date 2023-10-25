import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  MetalAlloyes= () => {
  

const electronicsData = [
    {
      id: 1,
      name: '',
      image: 'https://s.alicdn.com/@sc04/kf/H3718e7ec5299457198a02352ecd47260A.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: '',
      image: 'https://s.alicdn.com/@sc04/kf/H47d5cdaa9ab84fe3bbad71aff08ca209C.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/Hafe21217a49040c48ce36c5ebdc5a861M.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/Ac7f3d18791ac4d13868fcda71482b368z.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/Hb04c5d4e92cf4a55b1905cb24e78d2ccq.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H856a7d8995754633aec11c0f84b77427v.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H414fe6c275d245ea821ad079cce58fc2S.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H3a1dcc66525f4ee094f02d92d0b685a04.jpg_120x120.jpg',
      },{
        id: 9,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/Sa44fba61512946f9b8314f68424550beD.jpg_120x120.jpg',
      },{
        id: 10,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H24fc41bdfccf42008c99566d9e9a4fe6S.jpg_120x120.jpg',
      },{
        id: 11,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H3284ae53d7794d7698ed61b3f24568f78.png_120x120.jpg',
      },{
        id: 12,
        name: '',
        image: 'https://s.alicdn.com/@sc04/kf/H673b48d68ec14654b0a1c0e5b0de3cfaX.jpg_120x120.jpg',
      }
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Metals & Alloys<AiOutlineRight className='mt-1 ml-5'/>
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


export default MetalAlloyes

