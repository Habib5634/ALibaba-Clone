import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  HouseholdCleaning = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Essential Oil',
      image: 'https://s.alicdn.com/@sc04/kf/H3c6ae04bba15465690abe4e9ef0579bcC.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Hair Treatment',
      image: 'https://s.alicdn.com/@sc04/kf/H51a6e25675ed43ec99b6d7fe3a4b8dfe6.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Soap',
        image: 'https://s.alicdn.com/@sc04/kf/H1d8630fcb74542c69824109159eb4989r.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Teeth Whitining',
        image: 'https://s.alicdn.com/@sc04/kf/H2100321d5cbf4662a14c48c38ca10659z.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Body Lotion',
        image: 'https://s.alicdn.com/@sc04/kf/Hcbeba02a89e4422c8d36fa0bedf7bc7bB.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Hair Extension Tools',
        image: 'https://s.alicdn.com/@sc04/kf/He7b869ecbf1941008503fda5fc5adacah.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Shampoo',
        image: 'https://s.alicdn.com/@sc04/kf/Ha47b83e9b8c942d9bcf269170c4478d3t.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Loundary Detergent',
        image: 'https://s.alicdn.com/@sc04/kf/H953446a3c26c46df92b15eebdda9234eT.png_120x120.jpg',
      },{
        id: 9,
        name: 'HairBrush',
        image: 'https://s.alicdn.com/@sc04/kf/H9cbb593516b1407b8fc3c1d7d378e269o.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Comb',
        image: 'https://s.alicdn.com/@sc04/kf/H036fdfe1c0464323af6f54833bd29e5fi.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Toilet Tissues',
        image: 'https://s.alicdn.com/@sc04/kf/Uc976adf3ea3c4267a5375c6474df4860Y.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Breast Enhancement',
        image: 'https://s.alicdn.com/@sc04/kf/He54705f113714b6f90f62800c6e43777u.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Bath Brushes Sponges',
        image: 'https://s.alicdn.com/@sc04/kf/H4edc5c31e2db4643bfd57849ae4e5316U.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];

        

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Personal Care & Household Cleaning<AiOutlineRight className='mt-1 ml-5'/>
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


export default HouseholdCleaning

