import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const  PackagingPrinting = () => {
  

    const electronicsData = [
            {
              id: 1,
              name: 'Paper Boxes',
              image: 'https://s.alicdn.com/@sc04/kf/H60316321c2bf4facbf8a2ee126f8b5ddJ.jpg_120x120.jpg'
            },
            {
              id: 2,
              name: 'Plastic Bags',
              image: 'https://s.alicdn.com/@sc04/kf/H50b5c2a1a1f44bbf9bc515b62a2c981ad.png_120x120.jpg',
            },
            {
                id:3 ,
                name: 'Glass Bottles',
                image: 'https://s.alicdn.com/@sc04/kf/H481d38f0f61247f7bc10171ed4b30e039.jpg_120x120.jpg',
              },
              {
                id: 4,
                name: 'Paper Bags',
                image: 'https://s.alicdn.com/@sc04/kf/U1d0c15bbe5c04192a357f2dd80674d32l.jpg_120x120.jpg',
              },
              {
                id: 5,
                name: 'Packaging Labels',
                image: 'https://s.alicdn.com/@sc04/kf/H97ca7c961a254e51b9a9842b40dae08ag.jpg_120x120.jpg',
              },
              {
                id: 6,
                name: 'Plastic Bottles',
                image: 'https://s.alicdn.com/@sc04/kf/H60872a990f1e40e286579c82f07eee4cP.jpg_120x120.jpg',
              },
              {
                id: 7,
                name: 'Mailing Bags',
                image: 'https://s.alicdn.com/@sc04/kf/Hf200d88c8169478d88abe6e9ee1edc738.jpg_120x120.jpg',
              },
              {
                id: 8,
                name: 'Paper & Paper Boards',
                image: 'https://s.alicdn.com/@sc04/kf/H7f187f883e70465ba42cbd265242dbaaf.jpg_120x120.jpg',
              },{
                id: 9,
                name: 'Adhesive Paper',
                image: 'https://s.alicdn.com/@sc04/kf/H9861a4a6c8d142ea83b95db9c6fec419g.jpg_120x120.jpg',
              },{
                id: 10,
                name: 'Other Packaging',
                image: 'https://s.alicdn.com/@sc04/kf/H6019564e6d794d1a8f27ffbec4b59310p.jpg_120x120.jpg',
              },{
                id: 11,
                name: 'Plastic jars',
                image: 'https://s.alicdn.com/@sc04/kf/Hfaf09a10d1434273983a20c06bfd83f5j.jpg_120x120.jpg',
              },{
                id: 12,
                name: 'Transfer Printing',
                image: 'https://s.alicdn.com/@sc04/kf/U42abae0bdbab4846bf53053f3410e9cf9.jpg_120x120.jpg    ',
              },{
                id: 13,
                name: 'Plastic Boxes',
                image: 'https://s.alicdn.com/@sc04/kf/Hc4a769c400544280b7b68db007ca3274C.jpg_120x120.jpg',
              },
            // Add more items as needed
          ];
        

  return (
    <div className='flex justify-center flex-col w-full'>
      <h1 className='font-semibold flex mt-2 mr-2 '>
        Packaging & Printing<AiOutlineRight className='mt-1 ml-5'/>
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


export default PackagingPrinting

