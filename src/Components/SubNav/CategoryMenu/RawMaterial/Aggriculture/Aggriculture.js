import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Aggriculture= () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'aggriculture Green Houses',
      image: 'https://s.alicdn.com/@sc04/kf/H53c581f396414f7398e560b26cac961a4.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Other Aggriculture',
      image: 'https://s.alicdn.com/@sc04/kf/H35fc54d91d9f43eaba29a0150c5768ab1.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Animal Feed',
        image: 'https://s.alicdn.com/@sc04/kf/A4c7de4c2c6c54482bd06c654742ef7bb1.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Rice',
        image: 'https://s.alicdn.com/@sc04/kf/Sffa7c1de11db47c4b1cf89808693cf423.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Other Aquaculture',
        image: 'https://s.alicdn.com/@sc04/kf/HTB18fqedBKw3KVjSZTEq6AuRpXag.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Fresh Garlic',
        image: 'https://s.alicdn.com/@sc04/kf/Hd893a663d453411784c6d0b6a3a3f876S.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Corn',
        image: 'https://s.alicdn.com/@sc04/kf/A2092bf09cca246ea88fd84e4a3b006594.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Fresh Onion ',
        image: 'https://s.alicdn.com/@sc04/kf/H00bb3f17712b455ea28cd0e8cf7ddbad3.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Mushrooms',
        image: 'https://s.alicdn.com/@sc04/kf/H2d068e1e25eb48878e462ab6b47cdc7aD.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Coffee Beans',
        image: 'https://s.alicdn.com/@sc04/kf/Adf38c3d991b546298573c3ebd4a6d5b88.jpeg_120x120.jpg',
      },{
        id: 11,
        name: 'Frozen Vegetables',
        image: 'https://s.alicdn.com/@sc04/kf/A0c59518c49444a7ea5e9669a3d6a5d31W.jpeg_120x120.jpg',
      },{
        id: 12,
        name: 'Aggriculture Trap',
        image: 'https://s.alicdn.com/@sc04/kf/H13ede5184b314468be5c54d35355974cR.png_120x120.jpg',
      },{
        id: 13,
        name: 'Eggs',
        image: 'https://s.alicdn.com/@sc04/kf/A539f77f105704041a41736cdedbcf27ck.jpeg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Aggriculture<AiOutlineRight className='mt-1 ml-5'/>
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


export default Aggriculture

