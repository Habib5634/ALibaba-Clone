import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Gifts = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Meal Crafts',
      image: 'https://s.alicdn.com/@sc04/kf/H8dc4efb0a96f4750abc0edf1abb8a4800.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Gift Cards',
      image: 'https://s.alicdn.com/@sc04/kf/H34b236a435ba4ceb9576fe6234bc764aG.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Resin Crafts',
        image: 'https://s.alicdn.com/@sc04/kf/H7e979f7711e649889b2b04615b29e6c3o.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Metal Key Chains',
        image: 'https://s.alicdn.com/@sc04/kf/H94b41683375e4d1b961805995534f6b51.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Gift Sets ',
        image: 'https://s.alicdn.com/@sc04/kf/Hbff284f3826e42a69345c21938d21f1fM.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Crystal Crafts',
        image: 'https://s.alicdn.com/@sc04/kf/Hc8f840f3825b47819f5f80d6ae7efa71m.png_120x120.jpg',
      },
      {
        id: 7,
        name: 'Wood Crafts',
        image: 'https://s.alicdn.com/@sc04/kf/Hc8bdc0fb37d3446c93e240cdec8ba1469.png_120x120.jpg',
      },
      {
        id: 8,
        name: 'Plastic Key Chains',
        image: 'https://s.alicdn.com/@sc04/kf/He5f4be9d78194f0ab270a810277f74a1w.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Promotionals Key Chains',
        image: 'https://s.alicdn.com/@sc04/kf/H2530d4d91f7747aeaf2ccd664a91a282f.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Other Key Chains',
        image: 'https://s.alicdn.com/@sc04/kf/H133c4103986545328486b72cbae2495f9.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Paper Craft',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1.3.lV6TpK1RjSZKPq6y3UpXaB.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Flags',
        image: 'https://s.alicdn.com/@sc04/kf/Hd551afcdd08c4044bf6bcf6b62afb05fZ.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Ohter Promotionals',
        image: 'https://s.alicdn.com/@sc04/kf/H8ce4b61b27f640258d1efe08de720a9cS.png_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Gifts & Carts <AiOutlineRight className='mt-1 ml-5'/>
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


export default Gifts