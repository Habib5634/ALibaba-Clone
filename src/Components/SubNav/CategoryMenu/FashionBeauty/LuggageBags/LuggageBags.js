import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  LuggageBags= () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Handbags',
      image: 'https://s.alicdn.com/@sc04/kf/H40e6b105ca414b4cb3e0c71a40176c993.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Shopping Bags',
      image: 'https://s.alicdn.com/@sc04/kf/H202499dbc4cc4e31a75875f359dbb33ag.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Women Shoulder Bags',
        image: 'https://s.alicdn.com/@sc04/kf/Ha5601464f42143898cdba82f6100f02cs.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Women Messenger',
        image: 'https://s.alicdn.com/@sc04/kf/H9e9fdc8a74334a4ca75e5cc0a2b405160.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Women Tote Bags',
        image: 'https://s.alicdn.com/@sc04/kf/H1dc60aab69b1420b9b0949b0f3c793df6.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Cosmetics Bags & Cases',
        image: 'https://s.alicdn.com/@sc04/kf/H6ba5f9b2519340a28c6f9176fa23ffd5b.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Laptop Backpack',
        image: 'https://s.alicdn.com/@sc04/kf/H774ca23f7d9440769e86f0e6d7130cdaq.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Suitcases',
        image: 'https://s.alicdn.com/@sc04/kf/Hf850f1ef625746ca9a92ddbbef47abc2l.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Women handbags',
        image: 'https://s.alicdn.com/@sc04/kf/H65cc8c8727cc48baa5e8d634a3798257L.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Travel Bags',
        image: 'https://s.alicdn.com/@sc04/kf/H8c24ea0266904a00bc6ecf4c9a3553a4P.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Women Backpack',
        image: 'https://s.alicdn.com/@sc04/kf/H5635fd03909d4410899bb1e37ca45352G.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Wallets',
        image: 'https://s.alicdn.com/@sc04/kf/Hcb5a4980bd694744b49b5cd2b44cf7ebY.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Messenger Bags',
        image: 'https://s.alicdn.com/@sc04/kf/Hda055baaa4714878b3833be1ee2da646N.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Luggage, Bags & Cases<AiOutlineRight className='mt-1 ml-5'/>
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


export default LuggageBags

