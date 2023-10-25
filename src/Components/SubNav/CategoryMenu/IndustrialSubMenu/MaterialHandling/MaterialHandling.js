import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  MaterialHandling = () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'ForkLifts',
      image: 'https://s.alicdn.com/@sc04/kf/Hcac6f553d6544d9e9905cdf605e4a301H.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Lift Table',
      image: 'https://s.alicdn.com/@sc04/kf/H4465153a920a422a8539aced7e6f4553Z.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Stacking Racks',
        image: 'https://s.alicdn.com/@sc04/kf/H1e08e11fabfc4e62985c1aa22774c087E.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Hand Cart And Trolly',
        image: 'https://s.alicdn.com/@sc04/kf/A7082e67b265746428cc94f023de1c454E.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Material Handling',
        image: 'https://s.alicdn.com/@sc04/kf/H2ab1076a54cb423c8d189240ce61714fa.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Hoist',
        image: 'https://s.alicdn.com/@sc04/kf/He0eda67ef5394e108757f031b7bc888ba.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Conveyor',
        image: 'https://s.alicdn.com/@sc04/kf/Hdafb615a12c34564974f5e06633bebb13.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Casters',
        image: 'https://s.alicdn.com/@sc04/kf/H7074a23bcd8147d7935e348bd8195e604.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Other Winches',
        image: 'https://s.alicdn.com/@sc04/kf/Hbd63fb00ee61430cb5eab664dddcd86a7.png_120x120.jpg',
      },{
        id: 10,
        name: 'Other Material Handling',
        image: 'https://s.alicdn.com/@sc04/kf/HTB19_rNLMHqK1RjSZFgq6y7JXXaS.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Cargo & Storage',
        image: 'https://s.alicdn.com/@sc04/kf/Hc121e29f0b2a4c6980fca93078fbbf362.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Manipulator',
        image: 'https://s.alicdn.com/@sc04/kf/H3e958ade88384690ad7ecec88f4654b2B.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Caster wheels',
        image: 'https://s.alicdn.com/@sc04/kf/Ha5f5a1730a3e484f9634e339ef04a071o.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Material Handling<AiOutlineRight className='mt-1 ml-5'/>
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


export default MaterialHandling

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
