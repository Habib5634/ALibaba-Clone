import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  ShoesAccessories = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Walking Style Shoes ',
      image: 'https://s.alicdn.com/@sc04/kf/H09af79561a80414ba1585905011f8c2eT.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Walking Style Shoes',
      image: 'https://s.alicdn.com/@sc04/kf/H60f191e423e5470390164db8438762fal.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Skateboarding SHoes',
        image: 'https://s.alicdn.com/@sc04/kf/Hd82b4c0899f44d79891bdffdea45038cc.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Dress Shoes',
        image: 'https://s.alicdn.com/@sc04/kf/H36235542b82447e78337164b046ce9712.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Heeled Sandles',
        image: 'https://s.alicdn.com/@sc04/kf/H8ee3d4b5839e4d43af1df49bf6bea202n.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Slides Slippers',
        image: 'https://s.alicdn.com/@sc04/kf/H9f6d6ca1736e409ca27869d183a82354F.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Other Trendy Shoes',
        image: 'https://s.alicdn.com/@sc04/kf/H4f0f745a2cd04b298b47bd27a6fd9eb4M.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Pumps',
        image: 'https://s.alicdn.com/@sc04/kf/He43cc80d558e458bad64e95779b17587F.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Flate Sandals',
        image: 'https://s.alicdn.com/@sc04/kf/H2c0e6b873f9f40abb69db0eafa5a6475y.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Safety SHoes',
        image: 'https://s.alicdn.com/@sc04/kf/He7c3f84e841448b18ed3ea1519bfaa734.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Basketball Style Shoes',
        image: 'https://s.alicdn.com/@sc04/kf/H48c07a983511489aa492f755bdb96540b.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Flates',
        image: 'https://s.alicdn.com/@sc04/kf/H06afecc368f940d1b02591d9a2afc30cA.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Slides Slipper',
        image: 'https://s.alicdn.com/@sc04/kf/Hdb5c8576b6c8463698427a1d396fab8aK.png_120x120.jpg',
      },
    // Add more items as needed
  ];

  

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Shoes & Accessories<AiOutlineRight className='mt-1 ml-5'/>
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


export default ShoesAccessories

