import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'


import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom';
const SellerGetAllProducts = () => {
    const [userProducts, setUserProducts] = useState([]);
    const { user} = useSelector(state => state.auth)
    const userId = user?._id
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:5000/alibaba/usergetall');
            if (!response.ok) {
              throw new Error('Failed to fetch products');
            }
    
            const responseData = await response.json();
    
            // Check if the "products" key exists in the response data
            if (responseData.products && Array.isArray(responseData.products)) {
              const filteredProducts = responseData.products.filter(product => product.addedby === userId);
              setUserProducts(filteredProducts);
              console.log(filteredProducts)
            } else {
              console.error('Products response does not contain an array:', responseData);
            }
          } catch (error) {
            console.error('Error fetching products:', error.message);
          }
        };
    
        fetchProducts();
      }, [userId]);
    
  return (
    <div className='p-5'>
    

    <div className='flex flex-wrap justify-center bg-gray-100 xl:px-28 2xl:px-24 pt-5 overflow-hidden'>

        {userProducts.map((item) => (
          <div key={item._id} className='px-2 w-1/3 '>
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

  )
}

export default SellerGetAllProducts