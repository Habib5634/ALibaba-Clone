import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

const sections = [
  {
    title: 'Ensure production quality with',
    image: 'https://s.alicdn.com/@img/imgextra/i3/O1CN01cnsiSd1sFb5vxUBwd_!!6000000005737-2-tps-1200-210.png',
    description: 'Connect with a variety of suppliers, including Custom Manufacturers, Brand Holders, and Multispecialty Suppliers, that have verified credentials and capabilities'
  },
  {
    title: 'Protect your purchases with',
    image: 'https://s.alicdn.com/@img/imgextra/i1/O1CN01I0ebSF1UCntpAivUU_!!6000000002482-2-tps-1200-210.png',
    description: 'Source confidently for your business knowing that orders made through Trade Assurance on Alibaba.com are protected, from payment to delivery and after-sales.'
  }
];

const TradeWithConfidence = () => {
  return (
    <div className="bg-cover bg-center h-[100vh] flex flex-col w-full" style={{ backgroundImage: 'url("https://s.alicdn.com/@img/imgextra/i2/O1CN01of0szi1HBLd6pFTAC_!!6000000000719-0-tps-3840-1892.jpg")' }}>
      <div className='flex justify-start items-start py-20 px-14'>
        <h1 className='text-6xl font-semibold text-start text-white'>Trade with confidence from production quality to purchase protection</h1>
      </div>
      <div className='flex justify-center items-center space-x-10'>
        {sections.map((section, index) => (
          <div key={index} className='rounded-lg bg-white bg-opacity-10 w-2/5 p-6'>
            <h1 className='text-xl text-white font-medium my-4 '>{section.title}</h1>
            <img src={section.image} alt={`img${index + 1}`} />
            <p className='text-lg mb-10 text-white font-medium'>{section.description}</p>
            <div className='flex space-x-6 mb-10'>
              <button className='py-2 px-4 text-white space-x-2 border flex justify-center items-center border-white bg-black bg-opacity-20 hover:bg-opacity-50 transition-opacity duration-300 rounded-full'><AiFillPlayCircle className='text-xl mr-2' />Watch the Video</button>
              <button className='underline text-white text-lg'>Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TradeWithConfidence;
