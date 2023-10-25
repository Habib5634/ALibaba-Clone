import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  FoodBeverage = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Candy',
      image: 'https://s.alicdn.com/@sc04/kf/HLB1hcxOQNjaK1RjSZKzq6xVwXXaM.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Chocolate',
      image: 'https://s.alicdn.com/@sc04/kf/A34b7dd3df45e44fd9cc165f3dd82423cW.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Falvour Tea',
        image: 'https://s.alicdn.com/@sc04/kf/H1db7cc340ba7403a87935484801c4ad7z.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Food Aditives',
        image: 'https://s.alicdn.com/@sc04/kf/H232a677876284769bf24e91fae8296d1A.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Energy Drinks',
        image: 'https://s.alicdn.com/@sc04/kf/A01fe537f7edf4cdfb054b86eec7190a8X.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Slimming Tea',
        image: 'https://s.alicdn.com/@sc04/kf/H337a3f037b8345b999d19792818a6dcfk.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Wisky',
        image: 'https://s.alicdn.com/@sc04/kf/A7e6f130aef4f41e58a65c718f4d89475s.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Instant Coffee',
        image: 'https://s.alicdn.com/@sc04/kf/Abf82a7ae25604b2d973442f2d0cc55dbV.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Sunflower Oil',
        image: 'https://s.alicdn.com/@sc04/kf/U0fe5d94079f8410cb3a515feda046a02h.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Single Spice & Herbs',
        image: 'https://s.alicdn.com/@sc04/kf/Hf6bef8e935414a109c965197af14124dM.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Otehr Food & Beverages',
        image: 'https://s.alicdn.com/@sc04/kf/Ae02beb8607a545938c0264525fb9c0bek.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Carbonated Drinks',
        image: 'https://s.alicdn.com/@sc04/kf/A7d198abba88645ce84cd6159005df69d8.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Instant Noodles',
        image: 'https://s.alicdn.com/@sc04/kf/Hec1f202c2abf48639712c73e041ec9958.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Food & Beverages<AiOutlineRight className='mt-1 ml-5'/>
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


export default FoodBeverage

