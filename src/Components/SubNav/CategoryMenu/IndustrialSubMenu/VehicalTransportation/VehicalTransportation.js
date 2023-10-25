import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  VehicalTransportation = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Used Cars',
      image: 'https://s.alicdn.com/@sc04/kf/S469edb6118d1482d935df4dfe41091e5L.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'New Energy Vehicals',
      image: 'https://s.alicdn.com/@sc04/kf/H4496fabff1f04bddb159127cfb5e7dda4.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Electric Motorcycles',
        image: 'https://s.alicdn.com/@sc04/kf/Hbce08b8fbb8243ba92742c5dbdd815eah.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'New cars',
        image: 'https://s.alicdn.com/@sc04/kf/Hd2751c7f3bfc4f37a2fa993e7d04488ei.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Electric Tricycles',
        image: 'https://s.alicdn.com/@sc04/kf/H7802083977d841c0bc17918046f408c0p.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Off Road Motorcycles',
        image: 'https://s.alicdn.com/@sc04/kf/Hafc134a156304950b1de618551b37cc9v.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Motorcycles',
        image: 'https://s.alicdn.com/@sc04/kf/H2a1a20b5773245328058f0ce4db383e4r.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Electric Cars',
        image: 'https://s.alicdn.com/@sc04/kf/Hb9952db810b44851a4901a71a29c719fY.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'MiniBike Pochke',
        image: 'https://s.alicdn.com/@sc04/kf/Hf4f4ffae48ef45f99d0fd8331f5eaaab5.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Dump Truck',
        image: 'https://s.alicdn.com/@sc04/kf/Ha8069a881ed54432ba85ff58aaaee4abA.jpeg_120x120.jpg',
      },{
        id: 11,
        name: 'Cargo Truck',
        image: 'https://s.alicdn.com/@sc04/kf/Hdcca9e6d494b46098eda112a4ddb1576t.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Motorized tricycle',
        image: 'https://s.alicdn.com/@sc04/kf/Hdf8a58e500b0480ea5a5d3e5a294c47e1.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'SportBikes',
        image: 'https://s.alicdn.com/@sc04/kf/Hea026fa90ca94b5ebc242dc26f2a23ba0.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Vehicals & Transportation<AiOutlineRight className='mt-1 ml-5'/>
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


export default VehicalTransportation