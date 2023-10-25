import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Jewellery= () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Quartez Watches',
      image: 'https://s.alicdn.com/@sc04/kf/H3ccda5fdfca54a14b86e39a46817cc0fj.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Fashion Jewellery',
      image: 'https://s.alicdn.com/@sc04/kf/H71176690019344499a8b30b3a5602556S.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Fashion Jewellery',
        image: 'https://s.alicdn.com/@sc04/kf/H80ad3d8e1f794a008646167db3ad5107o.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Fashion Jewellery',
        image: 'https://s.alicdn.com/@sc04/kf/Hf1efea8fb748410a95a4261a1e5d89d54.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Sunglasses',
        image: 'https://s.alicdn.com/@sc04/kf/H7bdf4dd1a5c34ccd8c0bd7f6d14855a7I.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Jewellery Boxes',
        image: 'https://s.alicdn.com/@sc04/kf/H72a915c2a3784e38a4ecf62b901dd287x.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Fine Jewelley Neckless',
        image: 'https://s.alicdn.com/@sc04/kf/Ha8f52414f2764ec09bfd1da30f443966w.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Fashion Jewellery Rings',
        image: 'https://s.alicdn.com/@sc04/kf/HTB17cDQd8Cw3KVjSZR0q6zcUpXaD.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Fashion Jewellery',
        image: 'https://s.alicdn.com/@sc04/kf/Ha64dbc3d6a9c49fda648a5490fcdfc4cf.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'WyeGlasses Frames',
        image: 'https://s.alicdn.com/@sc04/kf/Hb63e15b46a9242f2b2a37f80b75d2259n.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Mechenical Watches',
        image: 'https://s.alicdn.com/@sc04/kf/H561a798c2517468bac8a4f32613939baS.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Fine Jewellery Rings',
        image: 'https://s.alicdn.com/@sc04/kf/A437cfbaa03984c3a98a719a4668b9a72w.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Digital Watches',
        image: 'https://s.alicdn.com/@sc04/kf/Hd3679603394b4b7eb2a6ac681175b65et.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Jewellery, Eyewear, Watches & Accessories<AiOutlineRight className='mt-1 ml-5'/>
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


export default Jewellery

