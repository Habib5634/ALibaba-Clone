import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  TestingInstrument = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Testing Equipment',
      image: 'https://s.alicdn.com/@sc04/kf/A318eff5a99124c0a899608760ff521f7D.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Wrighting Scale',
      image: 'https://s.alicdn.com/@sc04/kf/H980de2348d7941e48d1e878dd7ad600dW.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Temperature Instrument',
        image: 'https://s.alicdn.com/@sc04/kf/H8f29e729e0cf41a6b3fb9c7db7e744978.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Industrial Metal',
        image: 'https://s.alicdn.com/@sc04/kf/Abb6858f2016f4e43aea87c0ea65ae710L.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Other Test Instrument',
        image: 'https://s.alicdn.com/@sc04/kf/H9db0bd630cad425d9ca7e0954ade964aw.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Other Lab Supplies',
        image: 'https://s.alicdn.com/@sc04/kf/H354b8c4ff40c45f582920d44e0622f02M.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Optics Instruments',
        image: 'https://s.alicdn.com/@sc04/kf/H09d0d0aa0e8e46e7a269bc1fb3967917k.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Microscopes',
        image: 'https://s.alicdn.com/@sc04/kf/H21597726b508424db63fdc99a7b19dfds.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Level Measuring',
        image: 'https://s.alicdn.com/@sc04/kf/H10c3ae3215b544448d9613b7e39a2c8eX.png_120x120.jpg',
      },{
        id: 10,
        name: 'Flow Meters',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1sNyoXyrxK1RkHFCcq6AQCVXaL.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'PH Meters',
        image: 'https://s.alicdn.com/@sc04/kf/Hdd109864eebf4c31ac0e5a1b551ade94b.png_120x120.jpg',
      },{
        id: 12,
        name: 'Magnifiers',
        image: 'https://s.alicdn.com/@sc04/kf/Hee1c23fd377a41dea76fd364cde8144cA.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Gas Analyzers',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1PJvVaHPpK1RjSZFF7615PpXaa.png_120x120.jpg',
      },
    // Add more items as needed
  ];



  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Testing Instruments & Equipments<AiOutlineRight className='mt-1 ml-5'/>
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


export default TestingInstrument

