import React, { useEffect, useState } from 'react'
import servicesData from '../../../Components/ExploreOffers/Data';
import { Link, useParams } from 'react-router-dom';
import Navbar2 from '../../../Components/Navbar/Navbar2';
import API from '../../../service/API';

import HeaderBanner from './HeaderBanner/HeaderBanner';
import SourceByStore from './HeaderBanner/SourceByStore';
import JustForYou from './HeaderBanner/JustForYou';
import SubFooter from '../../../Components/Footer/SubFooter';


// const getCatagoryById = (id) => {
//     // Assuming products is an array of products
//     return servicesData.find(cat => cat.id === parseInt(id));
//   };

const CatagoryDetailPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const { id } = useParams();

  // Fetch category by ID
  useEffect(() => {
    const getCatagoryById = async (id) => {
      try {
        const response = await API.get(`http://localhost:5000/alibaba/usergetonecategory/${id}`);
        const category = response.data;
        setCategory(category);
        console.log(category)
      } catch (error) {
        console.error('Error fetching category:', error);
      }
    };

    getCatagoryById(id);
  }, [id]);

  // Fetch products and filter by category ID
  const getProducts = async () => {
    try {

      const response = await API.get("http://localhost:5000/alibaba/usergetall");
      const allProducts = response.data.products;

      if (category) {
        const products = allProducts.filter(product => product.category[0] === category._id);
        setProducts(products);
        console.log(products)
      }
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [category]);


  return (
    <>
      <Navbar2 />
      <div className='bg-gray-100'>
{/* first div */}
      {category && category.images && category.images[0] && (
        <div
          className='relative z-0 bg-cover h-[240px] bg-center top-0'
          style={{
            backgroundImage: `url(${category.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='bg-black bg-opacity-30 h-full'>
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white'>
              <h1 className='text-[40px] font-bold mb-2 -mt-12'>
                Category Title: {category ? category.category : 'Loading...'}
              </h1>
              <p className='text-base font-normal'>Discover new and trending products</p>
              
            </div>
            
          </div>
          
        </div>
      )}
      {/* 2nd div */}
<div className=' w-full relative  mb-7'>

<HeaderBanner/>
</div>  
<SourceByStore/>

      <div className='flex flex-col xl:px-28 '>
        <div className='flex'>
          {/* verified pro suppliers */}
          {/* {products.benefits === "verifiedpro" && ( */}
  <div className='bg-white pt-4 pl-2 rounded-lg w-1/2 m-2'>
    <h1 className='text-[20px] font-bold pl-4'>Verified Pro Suppliers</h1>
    <div className='flex p-2 space-x-2'>
    {products.map((item) => {
  if (item.benefits === "verifiedpro") {
    return (
      <div className='flex flex-col justify-center items-center p-2' key={item._id}>
        <img className='w-[132px] h-[132px] rounded-md' src={item.images[0]} alt='' />
        <p className='text-14px mt-4 font-bold'>US{item.priceOfPieces[0].price}</p>
      </div>
    );
  }
  return null; // Optionally, you can return null for elements that don't meet the condition
})}
    </div>
  </div>
{/* )} */}
          


          {/* upto 90% off samples */}
          <div className='bg-white pt-4 pl-2 rounded-lg w-1/2 m-2'>
            <h1 className='text-[20px] font-bold pl-4'>Up to 90% off Samples</h1>
            <div className='flex p-2 space-x-2'>
            {products.map((item) => {
  if (item.benefits === "80%off") {
    return (
      <div className='flex flex-col justify-center items-center p-2' key={item._id}>
        <img className='w-[132px] h-[132px] rounded-md' src={item.images[0]} alt='' />
        <p className='text-14px mt-4 font-bold'>US{item.priceOfPieces[0].price}</p>
      </div>
    );
  }
  return null;
})}
    </div>
          </div>




        </div>
        <div className='flex'>
          {/* verified suppliers */}
          <div className='bg-white pt-4 pl-2 rounded-lg w-1/2 m-2'>
            <h1 className='text-[20px] font-bold pl-4'>Verified Suppliers</h1>
            <div className='flex p-2 space-x-2'>
            {products.filter(item => item.benefits === "verified").slice(0, 4).map((item) => (
  <div className='flex flex-col justify-center items-center p-2' key={item._id}>
    <img className='w-[132px] h-[132px] rounded-md' src={item.images[0]} alt='' />
    <p className='text-14px mt-4 font-bold'>US{item.priceOfPieces[0].price}</p>
  </div>
))}
    </div>
          </div>

          {/* for ecommernce merchant */}
          <div className='bg-white pt-4 pl-2  rounded-lg w-1/2 m-2  '>
            <h1 className='text-[20px] font-bold pl-4'>For Ecommernce Merchant</h1>
            <div className='flex p-2 space-x-2'>
            {products.filter(item => item.benefits === "ecommerce").slice(0, 4).map((item) => (
  <div className='flex flex-col justify-center items-center p-2' key={item._id}>
    <img className='w-[132px] h-[132px] rounded-md' src={item.images[0]} alt='' />
    <p className='text-14px mt-4 font-bold'>US{item.priceOfPieces[0].price}</p>
  </div>
))}
    </div>
          </div>


        </div>
      </div>

      <h1 className='text-[20px] font-bold pl-[120px] py-5 bg-gray-100 pt-5'>Just For You</h1>
      <JustForYou/>

      <div className='flex flex-wrap justify-center bg-gray-100 xl:px-28 2xl:px-24 pt-5 overflow-hidden'>

        {products.map((item) => (
          <div key={item._id} className='px-2 w-1/5 '>
            <div

              className="flex bg-white flex-col justify-center pb-3   rounded-md  items-center mb-4"
            >
              <Link to={`/product-detail-page/${item._id}`}>
                <img
                  src={item.images[0]}
                  alt="Image"
                  className="object-cover w-[230px] h-[230px]"
                />
              </Link>

              <h1 className='self-start mt-6 font-normal px-3 text-[14px] overflow-hidden capitalize  max-w-full'>
                {item.title.length > 50 ? `${item.title.slice(0, 50)}...` : item.title}
              </h1>
              <span className='self-start flex'>
                <p className='text-[16px] font-bold pr-2 mt-0.5 px-3'> ${item.priceOfPieces[0].price}  - ${item.priceOfPieces[1].price}</p>
              </span>
              <p className='self-start px-3 text-[14px] font-normal'>Min, Order:{item.priceOfPieces[0].pieces} Pieces</p>
            </div>
          </div>
        ))}
      </div>

</div>  

<SubFooter/>
    </>
  )
}

export default CatagoryDetailPage