import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  SportsEntertainments = () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Electric Scooters',
      image: 'https://s.alicdn.com/@sc04/kf/H9b3243b35aae468eb6d8c7923bea31e5Q.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Soccer Shoes',
      image: 'https://s.alicdn.com/@sc04/kf/H7f3a587cb26e457cad04d6bb3a411947e.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Electric Hybrid Bike',
        image: 'https://s.alicdn.com/@sc04/kf/Heebadc041a08417d9dc43a0731bc075cd.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Electric City Bike',
        image: 'https://s.alicdn.com/@sc04/kf/H612683ad7e984fe3bf5aa269d022e0d1f.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Electric Mountain Bike',
        image: 'https://s.alicdn.com/@sc04/kf/H702d454e515744a19c48b2cd494eb827Q.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Trade Show Tents',
        image: 'https://s.alicdn.com/@sc04/kf/Hbbc17d96762b4ccaaa27dbd8add8b2c6V.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Sports & Entertainments',
        image: 'https://s.alicdn.com/@sc04/kf/H205fccf1f6bc4f2488fce0fa096d1593N.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Mountain Bikes',
        image: 'https://s.alicdn.com/@sc04/kf/Hc7b1b04d5a1c4be6b86f339c93df04d8W.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Coin Operated Games',
        image: 'https://s.alicdn.com/@sc04/kf/H45f4b30181f94208be03f443ceb0aaebr.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Running Shoes',
        image: 'https://s.alicdn.com/@sc04/kf/H205d8b45a7174ea6894519ceeffa2261z.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Other Camping',
        image: 'https://s.alicdn.com/@sc04/kf/Hb2524d89980b4b8995f23b910af7e917i.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Other Pools & Accessories',
        image: 'https://s.alicdn.com/@sc04/kf/H867c3979f98d4c379d2cf7d72925d6a5c.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Other Tents',
        image: 'https://s.alicdn.com/@sc04/kf/H59ccb73a48b54a9bbd80d6cebafdaa7en.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Sports & Entertainments<AiOutlineRight className='mt-1 ml-5'/>
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


export default SportsEntertainments

