import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  CommericalServices = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Display Racks',
      image: 'https://s.alicdn.com/@sc04/kf/H6bf7e3df96c4466e9b181c130997b6baw.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Digital Singage',
      image: 'https://s.alicdn.com/@sc04/kf/H7fc3bb54ea934eec9d71017877e6f9d4c.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Electronc Signs',
        image: 'https://s.alicdn.com/@sc04/kf/Hd6b507a927c943ee9e8fb398150dcfa5k.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Hotels & Restorent',
        image: 'https://s.alicdn.com/@sc04/kf/Hd0ac6377bc98484baf6b61f5f41d62f5E.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Audio Sound Equipment',
        image: 'https://s.alicdn.com/@sc04/kf/H1eef75b0565f4e97a512550e0de57e38n.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Sound Equipment',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1E9_BXdfvK1RjSspfq6zzXFXaJ.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Party Supplies',
        image: 'https://s.alicdn.com/@sc04/kf/H29a0aefdfdd64a5fbb240de40ad8227c6.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Vending Machines',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1YoIfRXXXXXbCXXXXq6xXFXXXy.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Referigation Machines    ',
        image: 'https://s.alicdn.com/@sc04/kf/H854724fdbce646d09bef932d31160afcS.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Advertising Inflateables',
        image: 'https://s.alicdn.com/@sc04/kf/Hfb51b207d3a3457a8bbb7a963f065a655.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Food Trucks',
        image: 'https://s.alicdn.com/@sc04/kf/Ha2c1b4c63a714ec69ad8927b6d821b0fZ.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'POS System ',
        image: 'https://s.alicdn.com/@sc04/kf/H5771f5c139d64ab78fb302ff8b6a18e4d.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'DJ Controller',
        image: 'https://s.alicdn.com/@sc04/kf/A4302d4f000294991b1ba27f06018ce82C.jpg_120x120.jpg    ',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Commerical Service Equipment<AiOutlineRight className='mt-1 ml-5'/>
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


export default CommericalServices
