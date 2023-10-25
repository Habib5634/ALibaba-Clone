import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  IndustrialMachinery = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Inkjet Printer',
      image: 'https://s.alicdn.com/@sc04/kf/H044c5444601e4563a97e1764382ddd15b.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Tractor',
      image: 'https://s.alicdn.com/@sc04/kf/Hed5febe0188b43569c4a12315f32028db.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Other Snack Machine',
        image: 'https://s.alicdn.com/@sc04/kf/H4e852b2eba9b428db304c405d5b9c132Q.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Filling Machines',
        image: 'https://s.alicdn.com/@sc04/kf/H950201ce173a4833a61dfc35d352ba70J.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Sewing Mavhines',
        image: 'https://s.alicdn.com/@sc04/kf/H8e86fdd110d04fb3bb7a70244d6df55eC.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Heat Press Machine',
        image: 'https://s.alicdn.com/@sc04/kf/Hbb55b914f60c4e7884eb3a178f37daa9F.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Multi Function Packaging',
        image: 'https://s.alicdn.com/@sc04/kf/Hf83faaeb1783425ea488733f3ede528eh.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Egg Incubator',
        image: 'https://s.alicdn.com/@sc04/kf/H3effeb3bc8624dd3ab52e7b5326680784.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Water Trreatement',
        image: 'https://s.alicdn.com/@sc04/kf/Hf3e8024945bb444a86a39b587b203cd2q.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Machinery Engine Parts',
        image: 'https://s.alicdn.com/@sc04/kf/UT8p_ClXNpaXXagOFbXg.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Feed Processing',
        image: 'https://s.alicdn.com/@sc04/kf/H84137343f68b4fd082fd1e405a36b946Q.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'DTF Printer',
        image: 'https://s.alicdn.com/@sc04/kf/H164177df9b23495083606f40bbc1c1a9N.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Cultivator',
        image: 'https://s.alicdn.com/@sc04/kf/Hbc4611f46dfd470489ad553c1b23b5499.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Industrial Machinery<AiOutlineRight className='mt-1 ml-5'/>
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


export default IndustrialMachinery