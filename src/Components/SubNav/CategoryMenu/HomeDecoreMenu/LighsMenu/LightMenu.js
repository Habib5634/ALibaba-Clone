import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Light = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Chandliers',
      image: 'https://s.alicdn.com/@sc04/kf/H3422541adb2d41279de95380bf05b422q.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Stage Lights',
      image: 'https://s.alicdn.com/@sc04/kf/H38646e150d3e4333a0460a4a11f48e54Y.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Smart Home Lights ',
        image: 'https://s.alicdn.com/@sc04/kf/Hcbe835ff6c1f4b2a9d9fada39b1f67ab2.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Night Lights',
        image: 'https://s.alicdn.com/@sc04/kf/Heff72701845a4ad4abbbcba22d353e28j.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Smart Strip lights',
        image: 'https://s.alicdn.com/@sc04/kf/Hd2ea53b51994421ba9a814eaf73dbcdea.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Table Lamps',
        image: 'https://s.alicdn.com/@sc04/kf/Hf0cd510ab0ec4d97815a1433b0d14372S.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'FlashLights & Torches',
        image: 'https://s.alicdn.com/@sc04/kf/Hc480ab27456f45e19981c324b0b0fb52z.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Solar Garden Lights ',
        image: 'https://s.alicdn.com/@sc04/kf/H6182bfd965a64018aa7573f219430cf6O.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Solar Street Lights ',
        image: 'https://s.alicdn.com/@sc04/kf/H9117909f2ac048da92415e750227084ed.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Decoration Lighting',
        image: 'https://s.alicdn.com/@sc04/kf/H9cdebcdacc2d4caa8ddb8bac01036435j.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Wall Lamps',
        image: 'https://s.alicdn.com/@sc04/kf/H3c4e653c12404c41a6095faa9a9d57c7d.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'LED Bulb',
        image: 'https://s.alicdn.com/@sc04/kf/H496ae48250a1411e994e306d0aa9bc41w.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Christmass Lights',
        image: 'https://s.alicdn.com/@sc04/kf/H20cf0c18c9364cc3ae471e99d28fae373.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Light & Lightings <AiOutlineRight className='mt-1 ml-5'/>
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


export default Light