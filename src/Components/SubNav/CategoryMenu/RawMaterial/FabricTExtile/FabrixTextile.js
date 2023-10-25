import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  FabricTextile= () => {
  
const electronicsData = [
    {
      id: 1,
      name: '100% Polyester',
      image: 'https://s.alicdn.com/@sc04/kf/H6f155c5fd36c4a518e6596f82a234b0fX.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Cotton Fabric ',
      image: 'https://s.alicdn.com/@sc04/kf/H33e0e1443e0f4bff928a2add021c8467U.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Lining Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/H1b34344d0b464891b99cdcc32aa3f6b1S.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Synthetic Leather',
        image: 'https://s.alicdn.com/@sc04/kf/H95dbe5867d9542b5af109202c91ee34dX.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Spendex Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/Hf464edc3c67a460faf5d1dd7714293e7E.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Home Deco Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/H4b31708364184f92a21999b6afdc8f72E.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Blended Yarn',
        image: 'https://s.alicdn.com/@sc04/kf/Hed9e6bbe2aa1459d800074b8da635974k.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Polyester/Cotton Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/H7295beb2a2924dadb2118a5578c7f4fbQ.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Other Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/H7b6db27aeb4b442ea1607d7a58467e18h.png_120x120.jpg',
      },{
        id: 10,
        name: 'NanWoven Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/A82c1aa26fbe2464598c0793d32c16992Z.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Embroidery Fabric',
        image: 'https://s.alicdn.com/@sc04/kf/H00c8a910770e48efb2fda6a8ba37f401M.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Feathers',
        image: 'https://s.alicdn.com/@sc04/kf/H2c56a24bfe2c464a9a47244815656410S.jpg_120x120.jpg',
      },{
        id: 13,
        name: '100% Silk Fabrics',
        image: 'https://s.alicdn.com/@sc04/kf/H7f477b7ef9c5430a9c54b3c7c5253d74B.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Fabric & Textile Raw Material<AiOutlineRight className='mt-1 ml-5'/>
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


export default FabricTextile

