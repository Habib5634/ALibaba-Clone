import React from 'react';

const options = [
  {
    id: 1,
    title: 'Take Factory Live Tour',
    image: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01blSupV1NpY5ZcwvIj_!!6000000001619-2-tps-920-920.png'
  },
  {
    id: 2,
    title: 'Get Samples',
    image: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01Lcuxd21Gs6zkRBFHe_!!6000000000677-2-tps-920-920.png'
  },
  {
    id: 3,
    title: 'Connect With Top Ranking Manufactures',
    image: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01twP5Jv1tjCIiCOQAv_!!6000000005937-2-tps-920-920.png'
  }
];

const SourceFactory = () => {
  return (
    <div className='py-20 px-14'>
      <h1 className='text-[32px] font-semibold mb-10'>Source direct-from-factory</h1>
      <div className='flex justify-center items-center space-x-10'>
        {options.map(option => (
          <div key={option.id} className=' relative'>
            <img src={option.image} className='w-full h-full rounded-xl text-[20px]' alt={option.title} />
            <h1 className='absolute top-6 left-6 text-xl font-semibold text-white'>{option.title}</h1>
            <h1 className='absolute bottom-6 left-6 text-white underline cursor-pointer'>View Live</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SourceFactory;
