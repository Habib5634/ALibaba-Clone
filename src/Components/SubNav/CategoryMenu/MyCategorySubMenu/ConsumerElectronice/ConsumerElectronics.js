import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const ConsumerElectronics = () => {
  const electronicsData = [
    {
      id: 1,
      name: '5g Smartphones',
      image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmVzfGVufDB8fDB8fHww'
    },
    {
      id: 2,
      name: 'Headphones and cases',
      image: 'https://images.unsplash.com/photo-1578345218746-50a229b3d0f8?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvbmVzfGVufDB8fDB8fHww',
    },
    {
        id:3 ,
        name: 'Smart Watches',
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaHxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 4,
        name: 'Used obile Phones',
        image: 'https://images.unsplash.com/photo-1573920011462-eb3003086611?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmVzfGVufDB8fDB8fHww',
      },
      {
        id: 5,
        name: 'Earbuds & In ears',
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 6,
        name: '3g 4g SmartPhones',
        image: 'https://images.unsplash.com/photo-1609252925148-b0f1b515e111?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 7,
        name: 'Mobile Phone cases',
        image: 'https://images.unsplash.com/photo-1605170439002-90845e8c0137?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob25lc3xlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        id: 8,
        name: 'Speakers',
        image: 'https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwZWFrZXJ8ZW58MHx8MHx8fDA%3D',
      },{
        id: 9,
        name: 'Power banks and Power stations',
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBvd2VyJTIwYmFua3N8ZW58MHx8MHx8fDA%3D',
      },{
        id: 10,
        name: 'Chargers & Adapters',
        image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D',
      },{
        id: 11,
        name: 'Ear Phones',
        image: 'https://images.unsplash.com/photo-1632200004922-bc18602c79fc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D',
      },{
        id: 12,
        name: 'Set Top Box',
        image: 'https://images.unsplash.com/photo-1603539444875-76e7684265f6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhcmdlcnxlbnwwfHwwfHx8MA%3D%3D',
      },{
        id: 13,
        name: 'Drones',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHJvbmV8ZW58MHx8MHx8fDA%3D',
      },
    // Add more items as needed
  ];

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Consumer Electronics <AiOutlineRight className='mt-1 ml-5'/>
      </h1>
      <div className='flex justify-center flex-wrap  items-center  mt-6'>
        {electronicsData.map(item => (
          <div key={item.id} className='flex w-1/4 mt-5 flex-col justify-center items-center'>
            <img className='h-16 w-16 rounded-full' src={item.image} alt={item.name} />
            <h1 className='text-center'>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}


export default ConsumerElectronics