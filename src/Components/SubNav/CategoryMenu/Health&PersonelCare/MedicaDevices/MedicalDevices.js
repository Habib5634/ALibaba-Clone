import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  MedicalDevices = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Other Medical Consumeables',
      image: 'https://s.alicdn.com/@sc04/kf/HTB1ciRgdjrguuRjy0Feq6xcbFXam.jpg_120x120.jpg'
    },
    {
      id: 2,
      name: 'Other Veterinery',
      image: 'https://s.alicdn.com/@sc04/kf/Hfa9b25fae21f4d72bc921a2498a22d18Y.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'The Basics Of Surgicals',
        image: 'https://s.alicdn.com/@sc04/kf/Ud0e9f70ddbc544d9adc42df681a4dac2g.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Other Dental Equipments',
        image: 'https://s.alicdn.com/@sc04/kf/Hf9f5a41b797e4b6db476f87c0739b492Z.jpg_120x120.jpg',
      },
      {
        id: 5,
        name: 'Oral Tharapy Equipments',
        image: 'https://s.alicdn.com/@sc04/kf/Hd01d0fe2c28c43fcae77148450f0377eE.jpg_120x120.jpg',
      },
      {
        id: 6,
        name: 'Physical Tharapy Equipments',
        image: 'https://s.alicdn.com/@sc04/kf/H09683c1e60504a5a955778c25e4f6c86l.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Hot & Cold',
        image: 'https://s.alicdn.com/@sc04/kf/H8a756e8036ef4fa2b916745135797562C.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Blood Pressures Monitors',
        image: 'https://s.alicdn.com/@sc04/kf/Ha5081674e72c482e93b86fae0a2a20bf5.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Rehabillations Equipments',
        image: 'https://s.alicdn.com/@sc04/kf/Hfb72da2814394d18b0f0dd54dbc238f8O.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Clinical Analytics',
        image: 'https://s.alicdn.com/@sc04/kf/H6600543d110146a6b52885f55fc78e378.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'Other Ultrasonic Machines',
        image: 'https://s.alicdn.com/@sc04/kf/H2c313372fd774510aef7ecb8c971cd54i.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Dental Consumables',
        image: 'https://s.alicdn.com/@sc04/kf/A9b86a2336de7460d9eb652a97a174985E.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Ear & Hearing Products',
        image: 'https://s.alicdn.com/@sc04/kf/H5467e6bce3094f21945a8a221c31622aV.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Medical Devices & Supplies<AiOutlineRight className='mt-1 ml-5'/>
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


export default MedicalDevices
