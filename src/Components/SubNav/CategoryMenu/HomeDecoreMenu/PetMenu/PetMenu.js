import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  PetMenu = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Pet Bowls & Feeders',
      image: 'https://s.alicdn.com/@sc04/kf/H6095ee2058b7417b89e86fa42947c2159.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Pet Grooming Product',
      image: 'https://s.alicdn.com/@sc04/kf/H884f1491fde44e0b922dafe37aaf16903.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Pet Beds',
        image: 'https://s.alicdn.com/@sc04/kf/Hf535240a6d5e47e8819ad6239fe3d23aX.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Aquariium & Acessories',
        image: 'https://s.alicdn.com/@sc04/kf/Ha28a1d636dd54b8fa0a2a75f303cbcc3f.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Pet Wast Disposel',
        image: 'https://s.alicdn.com/@sc04/kf/H66f3a76d9a6a40b6a897fdbe7f344481x.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Pet Chew Toys',
        image: 'https://s.alicdn.com/@sc04/kf/H47d9b2249c5f4c2c8ae194a3bc7fffe9L.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Pet Cage',
        image: 'https://s.alicdn.com/@sc04/kf/H41e30b29d67241d3a8d03b3be4d79051a.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: ' Pet Leashes',
        image: 'https://s.alicdn.com/@sc04/kf/H63f86820a38544fdb46b36e22d320982f.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Pet Intractive',
        image: 'https://s.alicdn.com/@sc04/kf/H9e2ba944728642c3b0c49e970417b3beW.png_120x120.jpg',
      },{
        id: 10,
        name: 'Pet Collar',
        image: 'https://s.alicdn.com/@sc04/kf/Hc467f786336e4b4ca6351121d161bd476.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Pet Clothes',
        image: 'https://s.alicdn.com/@sc04/kf/H3975ed26f8fd4e6dab5ae83e1e38a093R.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Pet Harnesses',
        image: 'https://s.alicdn.com/@sc04/kf/H95049690e83f4b03b3a11cd687355206c.png_120x120.jpg',
      },{
        id: 13,
        name: 'Pet CLeaning',
        image: 'https://s.alicdn.com/@sc04/kf/Hb4cf482ed89844cba780e7e50c3f3db07.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Pet Supplies<AiOutlineRight className='mt-1 ml-5'/>
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


export default PetMenu