import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  ToolsHardware = () => {
  
const electronicsData = [
    {
      id: 1,
      name: 'Other and Tools',
      image: 'https://s.alicdn.com/@sc04/kf/A621d75b035dc454e81fd8fdc92f887c3d.png_120x120.jpg'
    },
    {
      id: 2,
      name: 'Tool Sets',
      image: 'https://s.alicdn.com/@sc04/kf/H3e9937bdc01c43078467772b91817a95p.jpg_120x120.jpg',
    },
    {
        id:3 ,
        name: 'Power Drills',
        image: 'https://s.alicdn.com/@sc04/kf/H16d0894bc3f44221a2fb422354f21e71o.jpg_120x120.jpg',
      },
      {
        id: 4,
        name: 'Pumps',
        image: 'https://s.alicdn.com/@sc04/kf/H49751233eaf24c21b1f074a4d6db611cE.png_120x120.jpg',
      },
      {
        id: 5,
        name: 'Valves',
        image: 'https://s.alicdn.com/@sc04/kf/H5ed69e7e2816424893438d8aa3cc4994b.png_120x120.jpg',
      },
      {
        id: 6,
        name: 'Knives',
        image: 'https://s.alicdn.com/@sc04/kf/Hc54654a0d2ab47d9b578a10ab28b0269i.jpg_120x120.jpg',
      },
      {
        id: 7,
        name: 'Abrasive Tools',
        image: 'https://s.alicdn.com/@sc04/kf/He9beff9209534744b119069cfde879a2N.jpg_120x120.jpg',
      },
      {
        id: 8,
        name: 'Pipe Fittings',
        image: 'https://s.alicdn.com/@sc04/kf/H4f27c8a4c9fa4866a72f14e0477f07b0X.jpg_120x120.jpg',
      },{
        id: 9,
        name: 'Other Tools',
        image: 'https://s.alicdn.com/@sc04/kf/Hba359f5d05f54efb8900091950149bdfz.jpg_120x120.jpg',
      },{
        id: 10,
        name: 'Other Saws',
        image: 'https://s.alicdn.com/@sc04/kf/H28c7dd676642498982453a6c76a510b6r.jpg_120x120.jpg',
      },{
        id: 11,
        name: 'seals',
        image: 'https://s.alicdn.com/@sc04/kf/H5a0f1a3ef17c4a35b9ac38cf56f5b43ea.jpg_120x120.jpg',
      },{
        id: 12,
        name: 'Lawn Movers',
        image: 'https://s.alicdn.com/@sc04/kf/A835751a304554d67a1176227fefe7b1at.jpg_120x120.jpg',
      },{
        id: 13,
        name: 'Tool Cases',
        image: 'https://s.alicdn.com/@sc04/kf/H4bdd3ddc5feb424db7e97d1ff536016aI.jpg_120x120.jpg',
      },
    // Add more items as needed
  ];


  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Tools & Hardwares<AiOutlineRight className='mt-1 ml-5'/>
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


export default ToolsHardware
