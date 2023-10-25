import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  SchoolOffice = () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Notebooks',
      image: 'https://s.alicdn.com/@sc04/kf/H7abb7fc2d1cd47bdb228150bd1ce28f54.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'BallPoints Pens',
      image: 'https://s.alicdn.com/@sc04/kf/Hec70758c8cc949a2a512dd88e673e28cz.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Copy paper',
        image: 'https://s.alicdn.com/@sc04/kf/U0dd716c1c8a14311b55c897bff7e8e96o.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Printer Supplies',
        image: 'https://s.alicdn.com/@sc04/kf/H22ba824198d34ee9bf01da6791d3a493u.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Memo Pads',
        image: 'https://s.alicdn.com/@sc04/kf/Hf4155c2d51d74611b4081448ee65bb63M.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Gel Pens',
        image: 'https://s.alicdn.com/@sc04/kf/H2793e3251c2246cf91127e813469d3bee.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Filling Products',
        image: 'https://s.alicdn.com/@sc04/kf/H634e8bede2044f6fbec6a7451a718cc9Y.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Stamps',
        image: 'https://s.alicdn.com/@sc04/kf/Hcef4e44e5a8e41f6930aac210762a762D.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Marker Pen',
        image: 'https://s.alicdn.com/@sc04/kf/H1377b0cfbddd49b6b80b3ebc7687557cZ.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Art Markers',
        image: 'https://s.alicdn.com/@sc04/kf/H13bce5efab7e4acc922fd4c193260e03I.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Toner Cartreges',
        image: 'https://s.alicdn.com/@sc04/kf/Hc80db1bc6967469da06f85eac125f428b.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Time Recording',
        image: 'https://s.alicdn.com/@sc04/kf/H64c7733cc263485796fee6a1c762c748k.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Sandards Pencils',
        image: 'https://s.alicdn.com/@sc04/kf/H9aa41923fc50424ab40df4ce92242e30E.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
      School & office Supplies <AiOutlineRight className='mt-1 ml-5'/>
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


export default SchoolOffice
