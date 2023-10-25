import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Safety = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Safety Gloves',
      image: 'https://s.alicdn.com/@sc04/kf/H45cd608083494a6face8cafd80da6d31t.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Other Personel defence',
      image: 'https://s.alicdn.com/@sc04/kf/He0ee88ca76b543119dd1c5c0323dc50cK.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Reflective Safety',
        image: 'https://s.alicdn.com/@sc04/kf/A6e0a7030227d4e47ba4de204e8b65219c.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Boots',
        image: 'https://s.alicdn.com/@sc04/kf/Hff73ac5ed4234fdd9aa82f0afcf13ac1B.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Safety Clothing',
        image: 'https://s.alicdn.com/@sc04/kf/H600d324ae97e433cb76d6cea65f3bfa5V.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Fire Freighting Equipments',
        image: 'https://s.alicdn.com/@sc04/kf/H97a9f3f81ea34ff9b7aff7fb6df74d4en.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Hearing Protections',
        image: 'https://s.alicdn.com/@sc04/kf/H300df5ee837941cb8bb4461c666455a5V.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Traffic barrier',
        image: 'https://s.alicdn.com/@sc04/kf/H0fc3747dbf04405e9c89ecddc1fe1057N.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Other Safety Products',
        image: 'https://s.alicdn.com/@sc04/kf/He3afbc91f5c046d8a92a5284810fa7cbC.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Reflective Material',
        image: 'https://s.alicdn.com/@sc04/kf/H0cfd57c8834e40618c37a2856c825f5f1.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Respirator & Masks',
        image: 'https://s.alicdn.com/@sc04/kf/H6fc446bc34d748009a1525ee3aa5a07dU.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Fire Extinguisher',
        image: 'https://s.alicdn.com/@sc04/kf/H47e24f2b05b147eeaaba7442aef0711fu.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Hard Hats',
        image: 'https://s.alicdn.com/@sc04/kf/H8dee00f864f14c2db3f78fb2e754be2fs.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];



  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Safety<AiOutlineRight className='mt-1 ml-5'/>
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


export default Safety
