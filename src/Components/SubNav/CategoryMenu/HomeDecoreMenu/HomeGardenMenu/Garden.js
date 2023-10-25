import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Garden = () => {
  const electronicsData = [
    {
      id: 1,
      name: 'Mugs',
      image: 'https://s.alicdn.com/@sc04/kf/H4db74ababe944eefb5ef8217fd0ed8a52.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Watter Bottle',
      image: 'https://s.alicdn.com/@sc04/kf/H350dc8982efd40dda2a4361a987fde39F.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Storage Boxes',
        image: 'https://s.alicdn.com/@sc04/kf/Hebb799e801f3485799b03a2c85c985daN.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Cookwave Sets',
        image: 'https://s.alicdn.com/@sc04/kf/H1d992ae78bb04a0bbcd1240299a06252D.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Vaccume Flask',
        image: 'https://s.alicdn.com/@sc04/kf/H6f70921d3ea74a92a9ce5efedb324ca9o.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Food Storage',
        image: 'https://s.alicdn.com/@sc04/kf/H44174e2aef0f4c67899217621781ef76u.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Dishes and Plates',
        image: 'https://s.alicdn.com/@sc04/kf/H4ad7a86fc490443c996145e788517fdd5.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Storage Holders',
        image: 'https://s.alicdn.com/@sc04/kf/H97103c829f814ecd972b6603226d868d9.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Fruites & Vagetables',
        image: 'https://s.alicdn.com/@sc04/kf/H7c7f98fb1aea4762b9fef0be6514bf5aw.png_120x120.jpg',
      },{
        id: 10,
        name: 'Other Christmess',
        image: 'https://s.alicdn.com/@sc04/kf/H4ffc590d23834f8b8efdab68e7a103c61.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Other Party Decoration',
        image: 'https://s.alicdn.com/@sc04/kf/He064955c875f4d90adbd2ecb7e97c05dQ.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Cake Tool',
        image: 'https://s.alicdn.com/@sc04/kf/U14a9a148e42241398773349bd98de360W.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Area Rugs',
        image: 'https://s.alicdn.com/@sc04/kf/Hfd66c5bf377246c488fa7afa73d20659y.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Home & Gardens<AiOutlineRight className='mt-1 ml-5'/>
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


export default Garden