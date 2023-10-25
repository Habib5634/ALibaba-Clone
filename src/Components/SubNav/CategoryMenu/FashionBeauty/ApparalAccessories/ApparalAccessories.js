import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  ApparalAccessories = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Mens T-Shirts',
      image: 'https://s.alicdn.com/@sc04/kf/Hcb5cb6993d154dd8bb4922cc09e6f65eO.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Mens Hoodies & Sweaters',
      image: 'https://s.alicdn.com/@sc04/kf/H1071f8ad743d439e89a1932d082be206Z.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Mens JAckets',
        image: 'https://s.alicdn.com/@sc04/kf/Hac31837de8614e6f816274f5bf89d6565.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Casual Dresses',
        image: 'https://s.alicdn.com/@sc04/kf/Hf6e0cd10ed1d49ecbc1aa2941679a4e1b.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Used Clothes',
        image: 'https://s.alicdn.com/@sc04/kf/Hd664da22e6b4465b9c550a852821d6ceu.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Women Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H66fff1a6f4c64ccba654e2063b842b3cB.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Mens Pants & trousers',
        image: 'https://s.alicdn.com/@sc04/kf/H27fb15e2ed8d42e6b26bba24c2e3f13cI.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Mens Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H8d2031f1fe0142d9b976c6a25b333e3ai.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Training Wears',
        image: 'https://s.alicdn.com/@sc04/kf/H267b9a2936394b2e8f338339fa6469890.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Soccor Wears',
        image: 'https://s.alicdn.com/@sc04/kf/H807d8f1316d243caae44a1b89a980219o.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'baseball Caps',
        image: 'https://s.alicdn.com/@sc04/kf/H7546af0f223d41d6b643fd262eb10194w.png_120x120.jpg',
      },{
        id: 12,
        name: 'Gym Fittness Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H6966330c5ba3423a89a8530d74f8943fJ.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Mens jeans',
        image: 'https://s.alicdn.com/@sc04/kf/H8e20f305fac547499457096506667925f.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Apparal & Accessories<AiOutlineRight className='mt-1 ml-5'/>
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


export default ApparalAccessories
