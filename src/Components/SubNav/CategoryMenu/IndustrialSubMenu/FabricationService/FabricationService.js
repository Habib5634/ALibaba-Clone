import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  FabricationServices = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Moulds',
      image: 'https://s.alicdn.com/@sc04/kf/HTB1djbfDY1YBuNjSszhq6AUsFXa9.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Machining Services ',
      image: 'https://s.alicdn.com/@sc04/kf/A7f2c485e454b421490c4870745acdc4dn.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Sheet metal Fabricatin ',
        image: 'https://s.alicdn.com/@sc04/kf/H237ec7ce04d4437f9ad10fbfb6e431351.png_120x120.jpg',
      },
      {
        id: 4,
        name: 'Casting Services ',
        image: 'https://s.alicdn.com/@sc04/kf/He9b43d587a024a9aab4553762ebd9e52j.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Other Fabrications',
        image: 'https://s.alicdn.com/@sc04/kf/H4934b846b3364786917f173d0255c525T.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Forging Services',
        image: 'https://s.alicdn.com/@sc04/kf/H4e30657853634f56ad30d50fb70d6061U.jpg_120x120.jpg',
      }
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Fabrication Services<AiOutlineRight className='mt-1 ml-5'/>
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


export default FabricationServices

