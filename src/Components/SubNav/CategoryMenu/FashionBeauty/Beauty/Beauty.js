import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Beauty= () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Human Hair Wigs',
      image: 'https://s.alicdn.com/@sc04/kf/H6572ce98d8b14a0c8edbfd523365436fl.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Human Hair Extension',
      image: 'https://s.alicdn.com/@sc04/kf/Ha89fe8a5c9de4ebbbe338f5bd113e918z.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Face Cream & Lotion',
        image: 'https://s.alicdn.com/@sc04/kf/Hc8ecbcd7ca51468da5f4c629d86a7d8dX.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Women Perfumes',
        image: 'https://s.alicdn.com/@sc04/kf/H841c6aca798b45d2b06bd53dd998720aH.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Skin Care Serum',
        image: 'https://s.alicdn.com/@sc04/kf/Hbe12f6d0259a4543ada92a75f3db3989k.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Other Beauty',
        image: 'https://s.alicdn.com/@sc04/kf/Hdb8dfda8ab0742e38ab2be04859b9371t.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'UV Gel',
        image: 'https://s.alicdn.com/@sc04/kf/H3ab6188c77a849a89437e9d20d58a162e.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Lipstick',
        image: 'https://s.alicdn.com/@sc04/kf/H12feb420e3294cdc88296d6f6535ddf59.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Face Body & masks',
        image: 'https://s.alicdn.com/@sc04/kf/He2e9cbf6260342818ea32946cf43eebd3.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Full Strip Eye Shell',
        image: 'https://s.alicdn.com/@sc04/kf/Hccb58eabdd714a4eb09a097080e72d26p.png_120x120.jpg',
      },{
        id: 11,
        name: 'Mens Perfumes',
        image: 'https://s.alicdn.com/@sc04/kf/H39002a9f8038491cbef69b04f0b8b110y.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Brading Hairs',
        image: 'https://s.alicdn.com/@sc04/kf/Hdbcaac560e57406cbf6fe914d99d13c6n.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Skin Care Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H8b03ea25bdae48c4a9fcd8c5428333dcw.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Beauty<AiOutlineRight className='mt-1 ml-5'/>
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


export default Beauty

