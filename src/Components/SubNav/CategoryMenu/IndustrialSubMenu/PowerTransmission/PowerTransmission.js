import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  PowerTransmission= () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'DC Motors',
      image: 'https://s.alicdn.com/@sc04/kf/Hd8818466eb63448fa8b99ae29299264ba.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'AC Motors',
      image: 'https://s.alicdn.com/@sc04/kf/H4766afe0575043be93e041156624bae9Z.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Ball Bearing',
        image: 'https://s.alicdn.com/@sc04/kf/Hae92374423c044ae9740da799a928146j.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Hydraulic Pump',
        image: 'https://s.alicdn.com/@sc04/kf/H0b6fb17ce8234561be0e085f0aca0399T.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Hydrualic Valves',
        image: 'https://s.alicdn.com/@sc04/kf/H0e1b56007d9f4440a3f4de81e4041d83w.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Transmission Belts',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1wxuvXcfrK1Rjy1Xdq6yemFXad.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Hydraulic',
        image: 'https://s.alicdn.com/@sc04/kf/Ha63dd97ae14c41d4a55d6372d4492be5g.png_120x120.jpg',
      },
      {
        id: 8,
        name: 'Speed Reducers',
        image: 'https://s.alicdn.com/@sc04/kf/Hbf8505aacd124e2c9438375265f304e3n.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Motor Controller',
        image: 'https://s.alicdn.com/@sc04/kf/Ha1fb2b0366e24622832f511615a29ea4m.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Pulleys',
        image: 'https://s.alicdn.com/@sc04/kf/Hea217a28372b40f29a5409f423890560j.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Gearboxes',
        image: 'https://s.alicdn.com/@sc04/kf/H6c2dbdbedc6e43b58223f3f653449c3aW.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Hydraulic Motors',
        image: 'https://s.alicdn.com/@sc04/kf/H0736699b630c4b20977ea7ede7f47b65Q.png_120x120.jpg',
      },{
        id: 13,
        name: 'Stepper Motors',
        image: 'https://s.alicdn.com/@sc04/kf/He695aa34191c4c52982fdb3679c062f2L.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Power Transmissions<AiOutlineRight className='mt-1 ml-5'/>
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


export default PowerTransmission

