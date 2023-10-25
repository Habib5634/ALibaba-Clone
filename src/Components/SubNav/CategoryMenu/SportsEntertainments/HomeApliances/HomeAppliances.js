import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  HomeAppliances= () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Blenders',
      image: 'https://s.alicdn.com/@sc04/kf/Ac69bef633cd9458dae9ab486b47a27cfV.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Hair Trimmer & Clippers',
      image: 'https://s.alicdn.com/@sc04/kf/Ha99b85587981400fb1e5a957b86fed254.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Hair Dryer',
        image: 'https://s.alicdn.com/@sc04/kf/H947415f2c09b4e74ba152166f82cade5u.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Juicers',
        image: 'https://s.alicdn.com/@sc04/kf/Heebdfa4211134b4bbfdfa0120e2d28112.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Humidifiers',
        image: 'https://s.alicdn.com/@sc04/kf/H9650b60ba847428bac53e7a1b5e2dc0dL.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Arona Defuser',
        image: 'https://s.alicdn.com/@sc04/kf/H4698b28a29de4a69b3db97c41c8dcc9d4.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Portable & Wearable Fans',
        image: 'https://s.alicdn.com/@sc04/kf/H779fff4340c04f839d754ae1b85d0ffbi.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Air Fryer',
        image: 'https://s.alicdn.com/@sc04/kf/H3de227188dca412d9aff498dc29a340f3.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Hair Straightner',
        image: 'https://s.alicdn.com/@sc04/kf/H0cb9f577532e4e7a9ab9b61b60d1b864H.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Electric Kettle',
        image: 'https://s.alicdn.com/@sc04/kf/H96e17bd9c865409b9a8358b9953f36b28.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Expresso MAchines',
        image: 'https://s.alicdn.com/@sc04/kf/Aae5f6c65c3a5489dbf41de82b837301a0.jpeg_120x120.jpg',
      },{
        id: 12,
        name: 'Split Air Consitioners',
        image: 'https://s.alicdn.com/@sc04/kf/Heafd028ceffc4187a06e8482219d52f9e.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Mini Washing Machines',
        image: 'https://s.alicdn.com/@sc04/kf/H6a945bfcd42d4346b5fa1bcf2a12ddeb6.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Home Appliances<AiOutlineRight className='mt-1 ml-5'/>
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


export default HomeAppliances
