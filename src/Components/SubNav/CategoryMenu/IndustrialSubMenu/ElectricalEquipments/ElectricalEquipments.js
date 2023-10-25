import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  ElectricalEquipments = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Professional Audio Video',
      image: 'https://s.alicdn.com/@sc04/kf/Ad2e3e3d095ae465a82240bf6b7060db7O.jpeg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Connectors',
      image: 'https://s.alicdn.com/@sc04/kf/Hf7185197a92a499e9aecf6655c2b3ddcb.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Deisel Generators',
        image: 'https://s.alicdn.com/@sc04/kf/H60b1a7feed9a4b98b16aa48da9ddaf87g.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Electrical',
        image: 'https://s.alicdn.com/@sc04/kf/H3529f11cd59e4a778bbe51b19d046670W.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Plug & Socket',
        image: 'https://s.alicdn.com/@sc04/kf/HTB16_zsX5nrK1Rjy1Xc761eDVXaN.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Wall Switches',
        image: 'https://s.alicdn.com/@sc04/kf/H01da9e7341f645858d618a9681f3f7dcR.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'PLC & PAC ',
        image: 'https://s.alicdn.com/@sc04/kf/H379e1292b3444319a8e2b55f586d96baD.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Inverter & Converter',
        image: 'https://s.alicdn.com/@sc04/kf/H2118e65a1b674e99bc9b755e611690abK.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Electrical Wires',
        image: 'https://s.alicdn.com/@sc04/kf/Hfe7dd2aad7c940c18432077f3c9d5921H.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Gasoline Generators',
        image: 'https://s.alicdn.com/@sc04/kf/Hd85993a40ddb4511bf5e2e00db9af1f8C.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Switching Power Supply',
        image: 'https://s.alicdn.com/@sc04/kf/H023511b31e274a61902b80a49b7924ebM.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Electronics & Instruments',
        image: 'https://s.alicdn.com/@sc04/kf/H937b6739adab48a594aba81262557ff5q.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Power cables ',
        image: 'https://s.alicdn.com/@sc04/kf/HTB1U6romqQoBKNjSZJnq6yw9VXas.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Electrical Equipments & Supplies<AiOutlineRight className='mt-1 ml-5'/>
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


export default ElectricalEquipments

