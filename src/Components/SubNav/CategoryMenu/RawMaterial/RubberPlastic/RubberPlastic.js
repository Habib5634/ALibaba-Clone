import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  RubberPlastic= () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Plastic Sheets',
      image: 'https://s.alicdn.com/@sc04/kf/HTB1vIAoX3aH3KVjSZFpq6zhKpXac.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Other Rubber Products',
      image: 'https://s.alicdn.com/@sc04/kf/Hbadb6ddfc6b64040a6299a14cddd2285d.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Rubber Hoses',
        image: 'https://s.alicdn.com/@sc04/kf/H9405ddd013fb4277a487673a436b799dD.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Plastic Hoses',
        image: 'https://s.alicdn.com/@sc04/kf/H5895fa4a0fb14e27a3617f590afa946fb.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Plastic Nets',
        image: 'https://s.alicdn.com/@sc04/kf/H056deba55f1e4143991137f013acee83J.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Plastic Rods',
        image: 'https://s.alicdn.com/@sc04/kf/Habe800e30cbd476ca416c67eae5a618bI.png_120x120.jpg',
      },
      {
        id: 7,
        name: 'Silicone Rubber',
        image: 'https://s.alicdn.com/@sc04/kf/H6bc309bce7834abfbbc740df76897771h.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Rubber Sheet',
        image: 'https://s.alicdn.com/@sc04/kf/H2663540bde704d96b8f3a612960b398fU.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Aggriclture Plastic',
        image: 'https://s.alicdn.com/@sc04/kf/Haa8386dfc9784e89bb346e7410f8bc2aj.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'HDPE',
        image: 'https://s.alicdn.com/@sc04/kf/Hc13a2ee2e1404d6281caeaded208bbe0N.png_120x120.jpg',
      },{
        id: 11,
        name: 'Automotive Rubber    ',
        image: 'https://s.alicdn.com/@sc04/kf/H334fbb2feb4c4af8a91357f19a041261T.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Other Plastic Raw MAterial',
        image: 'https://s.alicdn.com/@sc04/kf/Hdc26d3d7777946fbbf0fdb059621efacB.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'PP',
        image: 'https://s.alicdn.com/@sc04/kf/H24a7aac00aed471b849dddf64e60584bq.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Rubber & Plastics<AiOutlineRight className='mt-1 ml-5'/>
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


export default RubberPlastic

