import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  FurnitureMenu = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'LIving Room Sofas',
      image: 'https://s.alicdn.com/@sc04/kf/H200348140a35420e9578b6eca8899704p.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Dining Tables ',
      image: 'https://s.alicdn.com/@sc04/kf/Hc51d43d183054fbf88b92cc1d8401a2dU.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Mattresses',
        image: 'https://s.alicdn.com/@sc04/kf/Ha0fe2813b75c4fa5a7d2e614757a05dc7.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Dining Chairs',
        image: 'https://s.alicdn.com/@sc04/kf/He4c49242ef9749c89e00fcdd3f57210c9.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Wardrobes',
        image: 'https://s.alicdn.com/@sc04/kf/Hb94e37167ff84d89ab4c1eec0a70eea7B.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Coffee Tables',
        image: 'https://s.alicdn.com/@sc04/kf/H12958eaa37354016b1630d189b8220b5E.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Hotel Chairs',
        image: 'https://s.alicdn.com/@sc04/kf/Had5a7e1d741c4aa58aac07685a67365aY.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Living Room Chairs',
        image: 'https://s.alicdn.com/@sc04/kf/H7b5c7fbbb737496086042650b0724396u.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Office Chairs',
        image: 'https://s.alicdn.com/@sc04/kf/Hcceaddba8f4f4847b4dfb5625175040dx.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Up-holdstred beds',
        image: 'https://s.alicdn.com/@sc04/kf/H7a877809ea0c418499315ded10fcc8b5p.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Sofa beds',
        image: 'https://s.alicdn.com/@sc04/kf/U5e641ab654544ccb8e586bc6d77e401dy.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Massag Tables & Beds',
        image: 'https://s.alicdn.com/@sc04/kf/H0d9285a8f9f1475c86bb5ee96e47a4e2o.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Shoe Racks',
        image: 'https://s.alicdn.com/@sc04/kf/Hb4de4e70add64021a1b34aa245a7d3e7c.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Furniture<AiOutlineRight className='mt-1 ml-5'/>
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


export default FurnitureMenu