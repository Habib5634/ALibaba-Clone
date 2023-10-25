import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  Chemicals= () => {
  

const electronicsData = [
    {
      id: 1,
      name: 'Adhesive & Sealants',
      image: 'https://s.alicdn.com/@sc04/kf/H1461f08ec9aa412baa9cdfe6362ec39a8.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Organic Intermediate',
      image: 'https://s.alicdn.com/@sc04/kf/H7888be30cfb14d9b880b72c3c5effbbfw.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Flavour Fragrance',
        image: 'https://s.alicdn.com/@sc04/kf/H810fa9533acd4b7e8ba4cf6a2ed780f0v.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Coating & Paints',
        image: 'https://s.alicdn.com/@sc04/kf/Hb85a3a63f1d046c0acc14976b4cacf30a.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Chemical Auxillery Agent',
        image: 'https://s.alicdn.com/@sc04/kf/Hee25eafdc7c542e89ac5d7c69e3f05f1z.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Daily Chemicals',
        image: 'https://s.alicdn.com/@sc04/kf/H483a6f461fd44d41a2f0fdb34f5dbc9au.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Pigment',
        image: 'https://s.alicdn.com/@sc04/kf/Hf8039e6fbb9b460a8f1f59bc1e26c91aZ.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Lubricant',
        image: 'https://s.alicdn.com/@sc04/kf/A6e2fad32372d4b2982ab16fc90447bc84.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Polymers',
        image: 'https://s.alicdn.com/@sc04/kf/H811f79d8c7ae436fb218a3da528f911db.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Carbons',
        image: 'https://s.alicdn.com/@sc04/kf/H7b63c9a73b4449b588da60f91bc36e21A.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'OtherChemicals',
        image: 'https://s.alicdn.com/@sc04/kf/A9f43d2ecae6c421ab4ccb119493aaf82i.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Other Fiberglass',
        image: 'https://s.alicdn.com/@sc04/kf/H0bff51d6923d46cf90896595138613d1d.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Hydrocarbons & Derivatives',
        image: 'https://s.alicdn.com/@sc04/kf/H514eca05d08246359589560d3d12813ak.png_120x120.jpg',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Chemicals<AiOutlineRight className='mt-1 ml-5'/>
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


export default Chemicals

