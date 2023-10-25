import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  VehicalParts = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Car Bumpers',
      image: 'https://s.alicdn.com/@sc04/kf/H2745e0d6c3ac4c7c878d30094968a2a7L.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Other Car lights',
      image: 'https://s.alicdn.com/@sc04/kf/H6f72943b2b644e879ae52669793c5b97B.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'LED HeadLights',
        image: 'https://s.alicdn.com/@sc04/kf/H11ec7456e20d4d66bd8aa4d9cab426c4p.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Auto PArts',
        image: 'https://s.alicdn.com/@sc04/kf/Ab10d08beba184fdab9cc816406388c0fw.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Passenger car wheels',
        image: 'https://s.alicdn.com/@sc04/kf/H4ec12b325f3946bea457580735e66448H.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Other Engine Parts ',
        image: 'https://s.alicdn.com/@sc04/kf/Hc51663657ab9452faff5baa38d72058dH.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Mototcycle Parts',
        image: 'https://s.alicdn.com/@sc04/kf/H6cdfb165fd1f47a4b3c849c8874e81bbQ.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Halogen & Xenon',
        image: 'https://s.alicdn.com/@sc04/kf/H93884c824026448a83a38b01b0c133d3e.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Ohter Wheel',
        image: 'https://s.alicdn.com/@sc04/kf/Hd1588d68edaa4e738dc01e8cca9bcfc2e.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Motorcycle Helmets',
        image: 'https://s.alicdn.com/@sc04/kf/H2bc59fdb632440e4b56ef82bdccf724ax.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Engines Assembly',
        image: 'https://s.alicdn.com/@sc04/kf/Hdf15b0f6dcc14bc68da0a9364288317d1.png_120x120.jpg',
      },{
        id: 12,
        name: 'Other Body Parts',
        image: 'https://s.alicdn.com/@sc04/kf/H41fc0bc355634b9695d3c46d8375aee8q.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Truck Tires',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1avuSawjN8KJjSZFkq6yboXXax.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Vehical Parts & Accessories<AiOutlineRight className='mt-1 ml-5'/>
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


export default VehicalParts

