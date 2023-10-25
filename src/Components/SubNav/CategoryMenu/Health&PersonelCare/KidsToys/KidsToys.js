import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  KidsToys = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Ride-on Cars',
      image: 'https://s.alicdn.com/@sc04/kf/Hd1fbe493e604427495c6901b5ffc32c4x.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Stuffed Animal Toys    ',
      image: 'https://s.alicdn.com/@sc04/kf/H080b47e0b8f84af8a0580cc1ecbb1218W.png_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Other Educational',
        image: 'https://s.alicdn.com/@sc04/kf/Hb5c63865cd094cb0b175fe00b9ea1cded.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Boys Clothing Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H60ab715bb4d848a2b602e94762c64fa78.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Girls Dresses',
        image: 'https://s.alicdn.com/@sc04/kf/He05a56ef15a24d35814cd872591e71b3q.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Baby Rompers',
        image: 'https://s.alicdn.com/@sc04/kf/Hf606a8268a0f490e89bddd480b399b19C.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Girls Clothing Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H1e21cc75bcf648e4b76af8319a03c0f9R.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Toy Guns',
        image: 'https://s.alicdn.com/@sc04/kf/H2fe338e943d14eddba51404636dd73708.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'School Bags',
        image: 'https://s.alicdn.com/@sc04/kf/Hdabdbafd7d974ab6b5432c0c70f2bc9cs.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Casual Shoes',
        image: 'https://s.alicdn.com/@sc04/kf/Ha59e079919ec4458ab473758462b045c8.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Baby Clothing Sets',
        image: 'https://s.alicdn.com/@sc04/kf/He4ffc10041464f0483b3cda79a005e06F.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'RC Cars',
        image: 'https://s.alicdn.com/@sc04/kf/H7a73fac7eb3844fb8502a733f61abda3q.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Baby Diapers',
        image: 'https://s.alicdn.com/@sc04/kf/Hd5e3bbb831db439c9bc0abfda2d0fde5l.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];
  

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Mother, Kids & Toys<AiOutlineRight className='mt-1 ml-5'/>
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


export default KidsToys

