import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Environments = () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Other Recycling',
      image: 'https://s.alicdn.com/@sc04/kf/Ac336c0f127e84834ad167a58982ab09co.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Textile Wasts',
      image: 'https://s.alicdn.com/@sc04/kf/H972ea624d1db457a81b246d32934d8e0r.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Other Environment',
        image: 'https://s.alicdn.com/@sc04/kf/H8caa3a49499a48eb937c30a48a094609N.png_120x120.jpg',
      },
      {
        id: 4,
        name: 'Sewer Product',
        image: 'https://s.alicdn.com/@sc04/kf/Hea0db8acef0149149bad2f53b0a765f88.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Other Excess Inventury',
        image: 'https://s.alicdn.com/@sc04/kf/UT80zm5XUdaXXagOFbXJ.jpg_120x120.jpg',
      },
      
    // Add more items as needed
  ];



  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
      Environments <AiOutlineRight className='mt-1 ml-5'/>
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


export default Environments
