import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Construction = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Container Houses   ',
      image: 'https://s.alicdn.com/@sc04/kf/H580d0fddfd984869a818d4c4f3f4aa41h.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Plastic Flooring',
      image: 'https://s.alicdn.com/@sc04/kf/Hd820e8a5b39144be8dedbe45f0f9298fT.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Other Doors',
        image: 'https://s.alicdn.com/@sc04/kf/H77d130553a4b4ebd92558770dc8d204dr.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Wallpapers',
        image: 'https://s.alicdn.com/@sc04/kf/H1b56f7dc43a64699ae0d7b8f4083b6e9w.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Other Boards',
        image: 'https://s.alicdn.com/@sc04/kf/H81ce0c1e15e94ef0be61a2700b7b7ce0v.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Other Prefab Houses',
        image: 'https://s.alicdn.com/@sc04/kf/Hd05dcc30cc2c4b65859fad92cdef94f1c.png_120x120.jpg',
      },
      {
        id: 7,
        name: 'Tiles',
        image: 'https://s.alicdn.com/@sc04/kf/H30cdb2dea43e4b399c6991e814a0eb317.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Bath & Shower',
        image: 'https://s.alicdn.com/@sc04/kf/H6d46a8200d634835890fca47f0f58b61R.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Toilets',
        image: 'https://s.alicdn.com/@sc04/kf/H9649efb9915548fe8a6fbbb33d88f6c1y.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Wall Panels',
        image: 'https://s.alicdn.com/@sc04/kf/Habe970e6fdc542c8ac4317d356a98a6eZ.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Kitchen sinks',
        image: 'https://s.alicdn.com/@sc04/kf/H9857c871ee6f471ba647b195d120e64bZ.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'KItchen cabinets',
        image: 'https://s.alicdn.com/@sc04/kf/H0f6bf6a64f9a4851a8b1fc3fac5a02ccF.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Sauna Rooms',
        image: 'https://s.alicdn.com/@sc04/kf/Hfac59ceace7f476dbf7c3d59d7306c44X.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Constructions & Real Estates<AiOutlineRight className='mt-1 ml-5'/>
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