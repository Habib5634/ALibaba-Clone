import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Construction = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Construction Machinery',
      image: 'https://s.alicdn.com/@sc04/kf/H3e6b9966b5f841c199cff0899cd1f8945.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Excavators',
      image: 'https://s.alicdn.com/@sc04/kf/Hbf7bdb5df1254fbcb7b602ae47beddf7X.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Loaders',
        image: 'https://s.alicdn.com/@sc04/kf/Hf445b02b9f414168bcb4744846c0589eT.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Used Excavators',
        image: 'https://s.alicdn.com/@sc04/kf/Hdfa6a1f69c32468790147f238dfb500cx.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Brick Making Machinery',
        image: 'https://s.alicdn.com/@sc04/kf/Hcb24d1416ead43e786ab08385673ec6bg.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Mine Drilling Rig',
        image: 'https://s.alicdn.com/@sc04/kf/Hb207c34b1c254209bb4ce987585543f0N.jpg_120x120.jpg    ',
      },
      {
        id: 7,
        name: 'Used Loaders',
        image: 'https://s.alicdn.com/@sc04/kf/H0186d96242d04890a2aafaae9c911d3f4.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Concrete Mixer',
        image: 'https://s.alicdn.com/@sc04/kf/Hf166427966c344db933ebf339ff4aab1b.png_120x120.jpg',
      },{
        id: 9,
        name: 'Mining Machine Parts',
        image: 'https://s.alicdn.com/@sc04/kf/H71e3d46bd88b467aac91ee443009c099X.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'tile Making Machinery',
        image: 'https://s.alicdn.com/@sc04/kf/H2e72f579457348468c862c8a9f3edf95A.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Other Construction',
        image: 'https://s.alicdn.com/@sc04/kf/H2711e5d802044afa991a77e943c529c7Q.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Truck Crane',
        image: 'https://s.alicdn.com/@sc04/kf/H88c93d1f751648adac50cd3fc6db2643U.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Stone Machinery',
        image: 'https://s.alicdn.com/@sc04/kf/Haa448e91b665439786bf9ff8ea2e2c61X.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Construction & Building Machinery<AiOutlineRight className='mt-1 ml-5'/>
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


export default Construction

