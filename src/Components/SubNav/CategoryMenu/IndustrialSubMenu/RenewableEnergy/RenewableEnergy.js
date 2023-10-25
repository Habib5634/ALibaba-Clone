import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  RenewableEnergy = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Lithium Lon batteries',
      image: 'https://s.alicdn.com/@sc04/kf/H35a02f17c5f1441bb741b76fe0fb1c6bB.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Sollar Energy System',
      image: 'https://s.alicdn.com/@sc04/kf/Hcad3e2583d0c47cbb8bf4a1666bfecafW.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Solar Penels',
        image: 'https://s.alicdn.com/@sc04/kf/H9316d877f8af422fbdbde068e70bd80fQ.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Solar Inverters',
        image: 'https://s.alicdn.com/@sc04/kf/Hc88c77b000fe4b2d9bc1c0dc448f61b0X.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Portable Power station',
        image: 'https://s.alicdn.com/@sc04/kf/H7eb31a1f02c342318b45357f301a81deI.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Home Energy Storage',
        image: 'https://s.alicdn.com/@sc04/kf/H0918623df8f841cf8c8a235b8248df511.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Lead Acid Batteries',
        image: 'https://s.alicdn.com/@sc04/kf/Hb4e359d8b2f34f3d884c4a8bf823bbf10.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Wind Generators',
        image: 'https://s.alicdn.com/@sc04/kf/H0e3fdb030f5d47dea104d608577d44f35.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Solar Water Pumps',
        image: 'https://s.alicdn.com/@sc04/kf/Hd957f39946254dc7b72cc98ffb8dd1d8A.jpeg_120x120.jpg',
      },{
        id: 10,
        name: 'Other Batteries',
        image: 'https://s.alicdn.com/@sc04/kf/Hbf445e2d3dd649c7b1a96d9410fc91ceY.png_120x120.jpg',
      },{
        id: 11,
        name: 'Uniintruptable Power',
        image: 'https://s.alicdn.com/@sc04/kf/H4161a4e7faff416aa7c11685d7b724728.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Primary Batteries',
        image: 'https://s.alicdn.com/@sc04/kf/H5ad7a591fb614deb90b11cd66ddbf5e7H.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Flexible Solar Pannels',
        image: 'https://s.alicdn.com/@sc04/kf/He7dc9006f035466ea355b2c03865c07do.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Renewable Energy<AiOutlineRight className='mt-1 ml-5'/>
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


export default RenewableEnergy

// const electronicsData = [
//     {
//       id: 1,
//       name: '',
//       image: ''
//     },
//     {
//       id: 2,
//       name: '',
//       image: '',
//     },
//     {
//         id:3 ,
//         name: '',
//         image: '',
//       },
//       {
//         id: 4,
//         name: '',
//         image: '',
//       },
//       {
//         id: 5,
//         name: '',
//         image: '',
//       },
//       {
//         id: 6,
//         name: '',
//         image: '',
//       },
//       {
//         id: 7,
//         name: '',
//         image: '',
//       },
//       {
//         id: 8,
//         name: '',
//         image: '',
//       },{
//         id: 9,
//         name: '',
//         image: '',
//       },{
//         id: 10,
//         name: '',
//         image: '',
//       },{
//         id: 11,
//         name: '',
//         image: '',
//       },{
//         id: 12,
//         name: '',
//         image: '',
//       },{
//         id: 13,
//         name: '',
//         image: '',
//       },
//     // Add more items as needed
//   ];
