import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../ProductsData/Data'
import Navbar2 from '../../../Components/Navbar/Navbar2';


const getProductById = (id) => {
    // Assuming products is an array of products
    return data.find(product => product.id === parseInt(id));
  };
const ProductDetailPage = () => {
    const { id } = useParams();
    const product = getProductById(id);

  return (
    <>
    <Navbar2/>
    <div className='flex justify-center px-6'>
        <div className='w-3/5'>
            <h1 className='text-[14px] mt-4'>Ready to ship .<span className='font-bold'>#{product.id}</span> <span className='underline'>{product.link1}</span></h1>
            <h1 className='text-[20px] font-semibold mt-3'>{product.title}</h1>
        </div>
        <div className='w-2/5'></div>
    </div>
    </>
  )
}

export default ProductDetailPage