import React from 'react'
import servicesData from '../../../Components/ExploreOffers/Data';
import { useParams } from 'react-router-dom';
import Navbar2 from '../../../Components/Navbar/Navbar2';


const getCatagoryById = (id) => {
    // Assuming products is an array of products
    return servicesData.find(cat => cat.id === parseInt(id));
  };

const CatagoryDetailPage = () => {
    const { id } = useParams();
  const catagory = getCatagoryById(id);
  console.log(catagory)

  return (
    <>
         <Navbar2/>
         <div className='relative bg-cover h-[240px] bg-center top-0' style={{ backgroundImage: `url(${catagory.catImg})` }}>
  <div className=' bg-black bg-opacity-30  h-full' >
    <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
      <h1 className='text-[40px] font-bold mb-2 -mt-9'>{catagory.title}</h1>
      <p className='text-base font-normal'>Discover new and trending products</p>
    </div>  
  </div>
</div>

    </>
  )
}

export default CatagoryDetailPage