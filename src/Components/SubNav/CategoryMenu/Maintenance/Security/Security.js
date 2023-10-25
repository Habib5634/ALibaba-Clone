import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Security = () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Network Camera',
      image: 'https://s.alicdn.com/@sc04/kf/H339b295723654276a191a66f0c1c8f158.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Acces Control cards',
      image: 'https://s.alicdn.com/@sc04/kf/Hcdcccc15d22c4e44b5131258d5417e0eB.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Smart Locks',
        image: 'https://s.alicdn.com/@sc04/kf/H9661a596f0c7495b8b6d7aaefd608d0di.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Mini Cameras',
        image: 'https://s.alicdn.com/@sc04/kf/H4536e98870e2411b812ffa7a49d5f578h.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Alarm System',
        image: 'https://s.alicdn.com/@sc04/kf/H3d30feeea03d44e3a8f277a883311590d.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Lock Cylinders',
        image: 'https://s.alicdn.com/@sc04/kf/H6156406bed74415799db02acbf8fb0f2g.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Locks',
        image: 'https://s.alicdn.com/@sc04/kf/Ha30717d6ff464e3298a3bca767a9e0a6H.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Surveliance System',
        image: 'https://s.alicdn.com/@sc04/kf/H11e2e385be514ebab5439f1204b8630df.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Analoge Camera',
        image: 'https://s.alicdn.com/@sc04/kf/H99eb6c337dd0416c8ce71564718a109dN.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Safes',
        image: 'https://s.alicdn.com/@sc04/kf/Hc7aaf7a7b1c14ea6893173f0d3555edaB.png_120x120.jpg',
      },{
        id: 11,
        name: 'Door Phones',
        image: 'https://s.alicdn.com/@sc04/kf/H37c4b7d1acc74ae8896d0bc2cc7fd0f6c.png_120x120.jpg',
      },{
        id: 12,
        name: 'Sccess Control Cards',
        image: 'https://s.alicdn.com/@sc04/kf/H870a4f24dbb84148b3099ce054b565531.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Biometric Access',
        image: 'https://s.alicdn.com/@sc04/kf/Hd4c9821126f84a979d445fc69cd33c92T.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
      Security <AiOutlineRight className='mt-1 ml-5'/>
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


export default Security
